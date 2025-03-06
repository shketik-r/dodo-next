import { Container, Title, TopBar, Filters, ProductsGroupList } from "@/components/shared";



export default function Home() {
  return (
    <>

      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar className="" />

      <Container className="mt-10 pb-14">
        {/* фильтрация */}
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
           
              <Filters className="123" />
     
          </div>

          {/* список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
                items={[
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imageUrl: "https://media.dodostatic.net/image/r:233x233/0194ab28a8867226b1e9812127a8f088.avif",
                    items: [{
                      price: 500,
                    },]
                  },
                  {
                    id: 2,
                    name: "Чизбургер-пицца",
                    imageUrl: "https://media.dodostatic.net/image/r:233x233/0194ab28a8867226b1e9812127a8f088.avif",
                    items: [{
                      price: 500,
                    },]
                  },
                  {
                    id: 3,
                    name: "Чизбургер-пицца",
                    imageUrl: "https://media.dodostatic.net/image/r:233x233/0194ab28a8867226b1e9812127a8f088.avif",
                    items: [{
                      price: 100,
                    },]
                  },
                  {
                    id: 4,
                    name: "Чизбургер-пицца",
                    imageUrl: "https://media.dodostatic.net/image/r:233x233/0194ab28a8867226b1e9812127a8f088.avif",
                    items: [{
                      price: 300,
                    },]
                  },
                  {
                    id: 5,
                    name: "Чизбургер-пицца",
                    imageUrl: "https://media.dodostatic.net/image/r:233x233/0194ab28a8867226b1e9812127a8f088.avif",
                    items: [{
                      price: 400,
                    },]
                  }
                ]}
                categoryId={1} />
              <ProductsGroupList
                title="Завтрак"

                items={[
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imageUrl: "https://media.dodostatic.net/image/r:233x233/0194ab28a8867226b1e9812127a8f088.avif",
                    items: [{
                      price: 500,
                    },]
                  },
                  {
                    id: 2,
                    name: "Чизбургер-пицца",
                    imageUrl: "https://media.dodostatic.net/image/r:233x233/0194ab28a8867226b1e9812127a8f088.avif",
                    items: [{
                      price: 500,
                    },]
                  },
                  {
                    id: 3,
                    name: "Чизбургер-пицца",
                    imageUrl: "https://media.dodostatic.net/image/r:233x233/0194ab28a8867226b1e9812127a8f088.avif",
                    items: [{
                      price: 100,
                    },]
                  },
                  {
                    id: 4,
                    name: "Чизбургер-пицца",
                    imageUrl: "https://media.dodostatic.net/image/r:233x233/0194ab28a8867226b1e9812127a8f088.avif",
                    items: [{
                      price: 300,
                    },]
                  },
                  {
                    id: 5,
                    name: "Чизбургер-пицца",
                    imageUrl: "https://media.dodostatic.net/image/r:233x233/0194ab28a8867226b1e9812127a8f088.avif",
                    items: [{
                      price: 400,
                    },]
                  }
                ]}
                categoryId={2} />
            </div>
          </div>
        </div>

      </Container>

    </>
  );
}
