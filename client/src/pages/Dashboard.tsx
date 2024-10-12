import { useEffect, useState, useMemo, useCallback } from 'react';
import { useAppContext } from '../context/ContextProvider';
import { FcOpenedFolder } from "react-icons/fc";
import { FolderCard, Spinner } from '../components';

export const Dashboard = () => {
  const { folders, updateFolders, openModal } = useAppContext();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const api = useMemo(() => new URL("/api/folders", import.meta.env.VITE_PUBLIC_API_URL), []);

  const fetchFolders = useCallback(async () => {
    try {
      const response = await fetch(api, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to fetch folders');
      }
      const data = await response.json();
      updateFolders(data.folders || []);
      setError(null);
    } catch (error) {
        setError(error instanceof Error ? error.message : 'An error occurred while fetching folders');
    } finally {
      setLoading(false);
    }
  }, [api, updateFolders]);

  useEffect(() => {
    fetchFolders();
  }, [fetchFolders]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-[80vh] gap-8">
        <div className='text-center'>
          <FcOpenedFolder className='text-[7rem]' />
        </div>
        <div className='text-center'>
          <p className='text-[1rem] text-red-500 font-medium leading-5'>
            {error}
          </p>
          <button 
            onClick={fetchFolders} 
            className="mt-4 px-6 py-2 bg-[#19303d] text-white font-semibold rounded-md shadow-sm hover:bg-[#0fe5c0] transition duration-300 ease-in-out"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      {folders.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-[80vh] gap-8">
          <div className='text-center'>
            <FcOpenedFolder className='text-[7rem]' />
          </div>
          <div className='text-center'>
            <p className='text-[1rem] text-[#757897] font-medium leading-5'>
              Folders let you keep your docs organized in one place.
            </p>
            <p className='text-[1rem] text-[#757897] font-medium'>
              All your folders will be listed here
            </p>
            <div className='flex items-center gap-4 mt-5'>
              <button className="flex items-center mt-auto px-6 py-2 text-[#757897] border font-semibold rounded-md shadow-sm transition duration-300 ease-in-out">
                Sample folder
              </button>
              <button 
                onClick={openModal} 
                className="flex items-center mt-auto px-6 py-2 bg-[#19303d] text-white font-semibold rounded-md shadow-sm hover:bg-[#0fe5c0] transition duration-300 ease-in-out"
              >
                Create a folder
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap">
          {folders.map(folder => (
            <FolderCard key={folder.id} name={folder.name} />
          ))}
        </div>
      )}
    </div>
  );
};
