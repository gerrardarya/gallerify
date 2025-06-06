'use client'

import { ImageIcon, ListIcon, SettingsIcon } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { GalleryWithCategory } from '@/features/gallery/actions/getGalleryById'
import GalleryCategoryAddForm from '@/features/galleryCategory/components/gallery-category-add-form'
import GalleryCategoryList from '@/features/galleryCategory/components/gallery-category-list'

type GallerySidebarProps = {
  galleryData: GalleryWithCategory
}
export default function GallerySidebar({ galleryData }: GallerySidebarProps) {
  const router = useRouter()
  const handleTabChange = (value: string) => {
    if (value === 'category') {
      router.push(
        `/gallery/${galleryData.id}/collection/${galleryData.GalleryCategory[0].id}`
      )
    } else if (value === 'image') {
      router.push(`/gallery/${galleryData.id}/update`)
    } else if (value === 'settings') {
      router.push(`/gallery/${galleryData.id}/update`)
    }
  }

  const categories = galleryData.GalleryCategory

  return (
    <div className="bg-muted/40 hidden border-r md:block">
      {galleryData && galleryData.bannerImage.length > 0 && (
        <div className="flex gap-2">
          <Image
            src={JSON.parse(galleryData.bannerImage[0]).url}
            width={330}
            height={150}
            alt="Banner Image"
            className="object-cover"
          />
        </div>
      )}
      <Tabs
        defaultValue="category"
        className="w-full"
        onValueChange={handleTabChange}
      >
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="category">
            <ListIcon className="size-4" />
          </TabsTrigger>
          <TabsTrigger value="image">
            <ImageIcon className="size-4" />
          </TabsTrigger>
          <TabsTrigger value="settings">
            <SettingsIcon className="size-4" />
          </TabsTrigger>
        </TabsList>
        <TabsContent value="category">
          <div className="flex flex-col">
            <div className="flex items-center justify-between px-4 py-2">
              <span className="text-sm text-gray-400">Category</span>
              <GalleryCategoryAddForm galleryId={galleryData.id} />
            </div>
            <div className="flex flex-col">
              <GalleryCategoryList galleryData={galleryData} />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="image"></TabsContent>
        <TabsContent value="settings"></TabsContent>
      </Tabs>
    </div>
  )
}
