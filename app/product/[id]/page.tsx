import type {Metadata} from "next";
type Params = Promise<{ id: string }>


export async function generateMetadata(PageProps: { params: Params }):Promise<Metadata> {
  const { id } = await PageProps.params

  return{
      title: `Продукт: ${id}`,
  }
}

export default async function ProductPage( ){

  return (
    <div>ProductPage </div>
  )
}