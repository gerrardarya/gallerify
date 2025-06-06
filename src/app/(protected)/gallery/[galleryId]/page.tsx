import { PlusCircleIcon } from 'lucide-react'
import React from 'react'

import { Button } from '@/components/ui/button'
import getGalleryById from '@/features/gallery/actions/getGalleryById'
import GalleryDetailMain from '@/features/gallery/components/gallery-detail-main'

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ galleryId: string }>
}) {
  const { galleryId } = await params
  const gallery = await getGalleryById(galleryId)

  if (!gallery) {
    return <div>Loading...</div>
  }
  return (
    <main className="flex flex-1 flex-col gap-4 overflow-auto p-4 lg:gap-6 lg:p-6">
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between gap-5">
          <h1 className="text-2xl">Gallery</h1>
          <Button variant="ghost">
            <PlusCircleIcon className="mr-2 size-3" />
            Add Media
          </Button>
        </div>
        <GalleryDetailMain galleryData={gallery} />
      </div>
    </main>
  )
}
