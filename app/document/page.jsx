import { useState, useEffect } from 'react';

export default function MediaAssets() {
  const [mediaAssets, setMediaAssets] = useState([]);
  const [documentTypes, setDocumentTypes] = useState([]);
  const [selectedDocType, setSelectedDocType] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Fetch media assets with optional document type filter
useEffect(() => {
    const fetchMediaAssets = async () => {
      setIsLoading(true);
      try {
        let url = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/media-assets?populate=*`;
        
        if (selectedDocType) {
          url += `&filters[document_type][id][$eq]=${selectedDocType}`;
        }
        
        const res = await fetch(url);
        const data = await res.json();
        setMediaAssets(data.data || []);
      } catch (error) {
        console.error("Failed to fetch media assets:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMediaAssets();
  }, [selectedDocType]);

  // Fetch document types for filter
  useEffect(() => {
    const fetchDocumentTypes = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/document-types`);
        const data = await res.json();
        setDocumentTypes(data.data || []);
      } catch (error) {
        console.error("Failed to fetch document types:", error);
      }
    };

    fetchDocumentTypes();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Media Assets</h1>
      
      {/* Document Type filter */}
      <div className="mb-6">
        <label htmlFor="docType" className="block mb-2">Filter by Document Type:</label>
        <select 
          id="docType"
          className="border rounded p-2 w-full md:w-1/3"
          value={selectedDocType} 
          onChange={(e) => setSelectedDocType(e.target.value)}
        >
          <option value="">All Document Types</option>
          {documentTypes.map(docType => (
            <option key={docType.id} value={docType.id}>
              {docType.attributes.name}
            </option>
          ))}
        </select>
      </div>
      
      {/* Loading state */}
      {isLoading ? (
        <div>Loading media assets...</div>
      ) : (
        /* Media Assets grid */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mediaAssets.length > 0 ? (
            mediaAssets.map(asset => (
              <div key={asset.id} className="border rounded-lg p-4 shadow">
                <h3 className="text-xl font-semibold mb-2">{asset.attributes.title}</h3>
                <p className="mb-4">{asset.attributes.description}</p>
                
                {/* Display document type if available */}
                {asset.attributes.document_type?.data && (
                  <p className="text-sm mb-2">
                    Type: {asset.attributes.document_type.data.attributes.name}
                  </p>
                )}
                
                {/* File download link */}
                {asset.attributes.file?.data && (
                  <a 
                    href={`${process.env.NEXT_PUBLIC_STRAPI_URL}${asset.attributes.file.data.attributes.url}`}
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                  >
                    Download File
                  </a>
                )}
              </div>
            ))
          ) : (
            <div className="col-span-full text-center">No media assets found</div>
          )}
        </div>
      )}
    </div>
  );
}