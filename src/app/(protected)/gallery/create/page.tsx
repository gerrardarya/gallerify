import BackButton from '@/components/back-button'
import GalleryCreateForm from '@/features/gallery/components/gallery-create-form'

export default function GalleryCreatePage() {
  return (
    <div className="flex max-w-lg flex-col gap-5">
      <div className="flex gap-3">
        <BackButton />
        <h1 className="text-3xl font-bold">Create New Gallery</h1>
      </div>
      <GalleryCreateForm />
    </div>
  )
}
