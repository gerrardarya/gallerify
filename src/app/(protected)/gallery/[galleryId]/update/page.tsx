import React from 'react'

import getGalleryById from '@/features/gallery/actions/getGalleryById'
import GalleryUpdateForm from '@/features/gallery/components/gallery-update-form'

export default async function GalleryUpdatePage({
  params,
}: {
  params: Promise<{ galleryId: string }>
}) {
  const { galleryId } = await params

  const gallery = await getGalleryById(galleryId)

  return (
    <main className="flex max-w-lg flex-1 flex-col gap-4 overflow-auto p-4 lg:gap-6 lg:p-6">
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between gap-5">
          <div className="flex">
            <h1 className="text-2xl">Update</h1>
          </div>
        </div>
        {gallery ? (
          <GalleryUpdateForm galleryData={gallery} />
        ) : (
          <div>Gallery not found</div>
        )}
      </div>
    </main>
  )
}
