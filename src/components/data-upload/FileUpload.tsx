import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Upload, FileSpreadsheet, CheckCircle, AlertCircle } from "lucide-react";
import { toast } from "sonner";

interface FileUploadProps {
  onFileProcessed: (data: any) => void;
}

export function FileUpload({ onFileProcessed }: FileUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [uploadStatus, setUploadStatus] = useState<"idle" | "success" | "error">("idle");

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check if the file is CSV or Excel
    const validFileTypes = ['text/csv', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
    if (!validFileTypes.includes(file.type)) {
      toast.error("Please upload a CSV or Excel file");
      return;
    }

    setFileName(file.name);
    setIsUploading(true);
    setUploadStatus("idle");

    try {
      // For now, we'll just parse CSV files on the client-side
      // In a real implementation, you might want to use a server endpoint
      const data = await parseFile(file);
      setIsUploading(false);
      setUploadStatus("success");
      onFileProcessed(data);
      toast.success("File processed successfully");
    } catch (error) {
      console.error("Error processing file:", error);
      setIsUploading(false);
      setUploadStatus("error");
      toast.error("Error processing file");
    }
  };

  const parseFile = async (file: File): Promise<any> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onload = (event) => {
        try {
          const csvData = event.target?.result as string;
          const lines = csvData.split('\n');
          const headers = lines[0].split(',').map(header => header.trim());
          
          const result = [];
          
          for (let i = 1; i < lines.length; i++) {
            if (lines[i].trim() === '') continue;
            
            const obj: Record<string, string> = {};
            const currentLine = lines[i].split(',');
            
            for (let j = 0; j < headers.length; j++) {
              obj[headers[j]] = currentLine[j]?.trim() || '';
            }
            
            result.push(obj);
          }
          
          resolve(result);
        } catch (error) {
          reject(error);
        }
      };
      
      reader.onerror = () => {
        reject(new Error('Error reading file'));
      };
      
      reader.readAsText(file);
    });
  };
  
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <Input 
          type="file" 
          accept=".csv,.xls,.xlsx" 
          onChange={handleFileChange}
          className="hidden"
          id="file-upload"
          disabled={isUploading}
        />
        <label htmlFor="file-upload" className="flex-1">
          <div className="flex items-center justify-center w-full h-14 px-4 transition-colors border border-dashed rounded-md cursor-pointer hover:bg-muted/30">
            {!fileName ? (
              <div className="flex items-center gap-2">
                <Upload className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium">
                  {isUploading ? "Uploading..." : "Click to upload CSV or Excel"}
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <FileSpreadsheet className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium truncate max-w-[150px]">{fileName}</span>
                {uploadStatus === "success" && <CheckCircle className="w-4 h-4 text-green-500" />}
                {uploadStatus === "error" && <AlertCircle className="w-4 h-4 text-destructive" />}
              </div>
            )}
          </div>
        </label>
        <Button
          disabled={!fileName || isUploading || uploadStatus === "success"}
          onClick={() => document.getElementById("file-upload")?.click()}
          size="sm"
        >
          {isUploading ? "Processing..." : "Upload"}
        </Button>
      </div>
    </div>
  );
}
