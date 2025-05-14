'use client'
// app/category/[category]/page.js
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function CategoryPage() {
  const params = useParams();
  const categorySlug = Array.isArray(params.category) ? params.category[0] : params.category;
  
  const [documents, setDocuments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Category mapping
  const categoryTitle = categorySlug === 'working-papers' ? 'Aegis Working Papers' : 
                        categorySlug === 'policy-briefs' ? 'Aegis Policy Briefs' :
                        categorySlug === 'journal-articles' ? 'RPHE Journal Articles' :
                        categorySlug === 'research-projects' ? 'Research Projects' :
                        categorySlug === 'research-events' ? 'Research Events' : 'Documents';

  useEffect(() => {
    async function fetchDocuments() {
      setIsLoading(true);
      
      try {
        const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'https://aegis-strapi.onrender.com';
        
        // Fetch all documents with related data
        const url = `${strapiUrl}/api/media-assets?populate=*`;
        console.log('Fetching all documents from:', url);
        
        const res = await fetch(url);
        
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }
        
        const data = await res.json();
        console.log('Raw API response:', data);
        
        // Process the data
        let allDocs = data.data || [];
        
        // Log how many documents we got
        console.log('Found total documents:', allDocs.length);
        
        // Map the data to a simpler structure
        const formattedData = allDocs.map((item:any) => {
          console.log('Document item:', item);
          
          // Handle both structures: flat or nested under attributes
          const docData = item.attributes || item;
          
          // Find the document URL if it exists
          let documentFileUrl = null;
          let documentFileName = "Document";
          let coverImg='Image'
          let coverUrl= null

          if(docData.coverImg){
            const cover = docData.coverImg;
            
            if (cover.data && Array.isArray(cover.data) && cover.data[0]?.attributes?.url) {
              // Nested structure from Strapi
              coverUrl = cover.data[0].attributes.url;
              coverImg = cover.data[0].attributes.name || "Document";
            } else if (cover.data && cover.data?.attributes?.url) {
              // Single nested object
              coverUrl = cover.data.attributes.url;
              coverImg = cover.data.attributes.name || "Document";
            } else if (cover.url) {
              // Direct URL structure
             coverImg = cover.url;
             coverUrl = cover.name || "Document";
            } else {
              // Handle flat structure directly
            coverImg= cover.url;
              coverUrl = cover.name || "Document";
            }

          }
          
          if (docData.DocumentFile) {
            const fileData = docData.DocumentFile;
            
            if (fileData.data && Array.isArray(fileData.data) && fileData.data[0]?.attributes?.url) {
              // Nested structure from Strapi
              documentFileUrl = fileData.data[0].attributes.url;
              documentFileName = fileData.data[0].attributes.name || "Document";
            } else if (fileData.data && fileData.data?.attributes?.url) {
              // Single nested object
              documentFileUrl = fileData.data.attributes.url;
              documentFileName = fileData.data.attributes.name || "Document";
            } else if (fileData.url) {
              // Direct URL structure
              documentFileUrl = fileData.url;
              documentFileName = fileData.name || "Document";
            } else {
              // Handle flat structure directly
              documentFileUrl = fileData.url;
              documentFileName = fileData.name || "Document";
            }
          }
          
          // Get document type
          let documentType = "";
          if (docData.document_type?.data?.attributes?.name) {
            // Nested structure
            documentType = docData.document_type.data.attributes.name;
          } else if (docData.document_type?.name) {
            // Simple object
            documentType = docData.document_type.name;
          } else if (docData.document_type?.DocumentType) {
            // Your specific data structure
            documentType = docData.document_type.DocumentType;
          }
          
          return {
            id: item.id || docData.id,
            title: docData.Title || 'Untitled Document',
            author: docData.Author || '',
            coverImg: coverImg || '',
            coverUrl : coverUrl || '',
            publisher: docData.Publisher || '',
            documentType: documentType,
            documentId: docData.documentId || '',
            publicationDate: docData.publicationDate || '',
            documentFileUrl: documentFileUrl,
            documentFileName: documentFileName
          };
        });
        
        console.log('Formatted data:', formattedData);
        
        // Filter by category if needed
        let filteredDocs = formattedData;
        if (categorySlug === 'working-papers') {
          filteredDocs = formattedData.filter((doc:any) => 
            doc.documentType.toLowerCase().includes('working paper')
          );
        } else if (categorySlug === 'policy-briefs') {
          filteredDocs = formattedData.filter((doc:any) => 
            doc.documentType.toLowerCase().includes('policy brief')
          );
        } else if (categorySlug === 'journal-articles') {
          filteredDocs = formattedData.filter((doc:any) => 
            doc.documentType.toLowerCase().includes('journal')
          );
        } else if (categorySlug === 'research-projects') {
          filteredDocs = formattedData.filter((doc:any) => 
            doc.documentType.toLowerCase().includes('research project')
          );
        } else if (categorySlug === 'research-events') {
          filteredDocs = formattedData.filter((doc:any) => 
            doc.documentType.toLowerCase().includes('event')
          );
        }
        
        console.log('Filtered documents:', filteredDocs);
        setDocuments(filteredDocs);

      } catch (err:any) {
        console.error('Fetch error:', err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchDocuments();
  }, [categorySlug]);

  if (isLoading) return <div className="p-8 text-center">Loading...</div>;
  
  if (error) return <div className="p-8 text-center text-red-500">Error: {error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{categoryTitle}</h1>
      
      {/* Breadcrumb */}
      <div className="mb-6">
        <Link href="/" className="text-maroon hover:underline">Home</Link> / {categoryTitle}
      </div>
      
      {/* Debug Info */}
      <div className="mb-6 p-4 bg-gray-100 rounded">
        <h2 className="font-semibold mb-2">Debug Information</h2>
        <p>Total documents from API: {documents.length}</p>
        <p>Category slug: {categorySlug}</p>
        <p>Category title: {categoryTitle}</p>
      </div>
      
      {/* Documents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {documents.length > 0 ? (
          documents.map(doc => (
            <div key={(doc as { id: string }).id} className="border rounded-lg p-6 shadow">

              <h2 className="text-xl font-semibold mb-3">
                {(doc as any).title || `Document ${(doc as any).documentId}`}
              </h2>
              
              {(doc as any).author && (
  <p className="mb-2"><strong>Author:</strong> {(doc as any).author}</p>
)}

{(doc as any).publisher && (
  <p className="mb-2"><strong>Publisher:</strong> {(doc as any).publisher}</p>
)}

{(doc as any).publicationDate && (
  <p className="mb-2"><strong>Publication Date:</strong> {(doc as any).publicationDate}</p>
)}

{(doc as any).documentType && (
  <p className="mb-2"><strong>Type:</strong> {(doc as any).documentType}</p>
)}

{(doc as any).coverUrl && typeof (doc as any).coverUrl === 'string' && (
  <Image
    src={`/${(doc as any).coverUrl}`}
    height={300}
    width={300}
    alt="cover"
  />
)}

            
              
              {(doc as any).documentFileUrl && (
                <a 
                  href={(doc as any).documentFileUrl.startsWith('http') 
                    ? (doc as any).documentFileUrl 
                    : `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${(doc as any).documentFileUrl}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-maroon text-white py-2 px-4 rounded mt-4"
                >
                  Download {(doc as any).documentFileName}
                </a>
              )}
            </div>
          ))
        ) : (
          <div className="col-span-full text-center p-8">
            No documents found in this category.
          </div>
        )}
      </div>
    </div>
  );
}