import React, { useEffect, useRef, useState } from "react";
import { Download, Trash2, Eye } from "lucide-react";


const Document = () => {
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);


  //input mate
  const handleAddFilesClick = () => {
    fileInputRef.current.click();

  };

  // delete button 
  const handleDelete = (id) => {
    setFiles((prev) => prev.filter((file) => file.id !== id));
  };


  // upload file mate
  const handleFileChange = (e) => {
    const uploaded = Array.from(e.target.files);

    const newFiles = uploaded.map((file, index) => ({
      id: Date.now() + index,
      source: "Local Device",
      fileName: file.name,
      fileStatus: "Uploaded",
      fileType: file.type.split("/")[1]?.toUpperCase() || "FILE",
      fileObject: file, // ✅ add this line to store the file itself
    }));

    setFiles((prev) => [...prev, ...newFiles]);
  };

  // Simulate status changes
  useEffect(() => {
    const timers = [];

    files.forEach((file) => {
      if (file.fileStatus === "Uploaded") {
        // Set to Processing
        const timer1 = setTimeout(() => {
          setFiles((prev) =>
            prev.map((f) =>
              f.id === file.id ? { ...f, fileStatus: "Processing" } : f
            )
          );
        }, 2000);
        timers.push(timer1);
        // Set to Processed
        const timer2 = setTimeout(() => {
          setFiles((prev) =>
            prev.map((f) =>
              f.id === file.id ? { ...f, fileStatus: "Processed" } : f
            )
          );
        }, 4000);
        timers.push(timer2);
      }
    });

    return () => timers.forEach(clearTimeout);
  }, [files]);

  // status color
  const getStatusDotColor = (status) => {
    switch (status) {
      case "Uploaded":
        return "bg-yellow-500";
      case "Processing":
        return "bg-orange-500";
      case "Processed":
        return "bg-green-500";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <main className="w-full max-w-9xl mx-auto">
      <div className="rounded-2xl bg-white shadow-xl border-0 h-[calc(100vh-4rem)] flex flex-col overflow-hidden">
        <div className="w-full max-w-7xl mx-auto mt-10 p-6 rounded-xl flex flex-col h-full overflow-y-hidden">

          {/* upload files krvani */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold mb-5">Upload Files</h2>
            <input
              type="file"
              multiple
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileChange}
            />
            <button
              onClick={handleAddFilesClick}
              className="bg-black text-white px-4 py-2 rounded hover:scale-105 transition-all"
            >
              Add Files
            </button>
          </div>


          {/* table */}
          <div className="overflow-y-auto flex-1 scroll-hidden ">
            <table className="min-w-full border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 text-left text-sm font-medium text-gray-700 border-b">
                    Source
                  </th>
                  <th className="p-3 text-left text-sm font-medium text-gray-700 border-b">
                    File Name
                  </th>
                  <th className="p-3 text-left text-sm font-medium text-gray-700 border-b">
                    File Status
                  </th>
                  <th className="p-3 text-left text-sm font-medium text-gray-700 border-b">
                    File Type
                  </th>
                  <th className="p-3 text-left text-sm font-medium text-gray-700 border-b">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* dynamic table field */}
                {files.map((file) => (
                  <tr key={file.id} className="hover:bg-gray-50">
                    <td className="p-3 text-sm text-gray-800">{file.source}</td>
                    <td className="p-3 text-sm text-gray-800">{file.fileName}</td>

                    {/* file nu status aave  */}
                    <td className="p-3 text-sm flex items-center gap-2">
                      <span
                        className={`h-3 w-3 rounded-full ${getStatusDotColor(file.fileStatus)}`}
                      ></span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium`}
                      >
                        {file.fileStatus}
                      </span>
                    </td>
                    <td className="p-3 text-sm text-gray-800">{file.fileType}</td>

                    {/* delete download access */}
                    <td className="p-3 text-sm text-gray-800 space-x-5 flex">
                      <button
                        onClick={() => handleDelete(file.id)}
                        className="text-red-600 hover:text-red-800"
                        title="Delete"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>

                      {/* save the pdf  */}
                      <button
                        onClick={() => {
                          const blob = new Blob([file.fileObject], { type: file.fileObject.type });
                          const url = URL.createObjectURL(blob);
                          const a = document.createElement("a");
                          a.href = url;
                          a.download = file.fileName;
                          a.click();
                          URL.revokeObjectURL(url); // clean up
                        }}
                        className="text-green-600 hover:text-green-800"
                        title="Download"
                      >
                        <Download className="w-5 h-5" />
                      </button>

                      {/* see the pdf in new tab */}
                      <button
                        onClick={() => {
                          const blob = new Blob([file.fileObject], { type: file.fileObject.type });
                          const url = URL.createObjectURL(blob);
                          window.open(url, "_blank"); // Open in new tab
                        }}
                        className="text-gray-600 hover:text-gray-800"
                        title="View"
                      >
                        <Eye className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* zero  files   */}
            {files.length === 0 && (
              <p className="text-center text-gray-500 mt-4">No files uploaded yet.</p>
            )}
          </div>


        </div>
      </div>
    </main>
  );
};

export default Document;
