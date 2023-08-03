import React from 'react'
const products = [
    {
      id: 1,
      name: 'Sun Glassess',
      lens : "Lens Name",
      href: '#',
      color: 'Salmon',
      price: '$ 90.00',
      lensprice : '$ 20.30',
      quantity: 12,
      imageSrc: '/1 (1).jpeg',
      imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
    {
      id: 2,
      name:'Eye Glasses',
      lens : "Lens Name",
      href: '#',
      color: 'Blue',
      price: '$ 36.00',
      lensprice : '$ 20.30',
      quantity: 56,
      imageSrc: '/1 (2).jpeg',
      imageAlt:
        'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    },
    {
        id: 3,
        name:'Lens',
        lens : "Lens Name",
        href: '#',
        color: 'Blue',
        price: '$ 32.00',
        lensprice : '$ 20.30',
        quantity: 100,
        imageSrc: '/1 (3).jpeg',
        imageAlt:
          'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
      },
    // More products...
  ]
const CartSingleItem = () => {
  return (
    <div>
        <div className="mt-8">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {products.map((product) => (
                              <li key={product.id} className="flex py-6">
                                <div className="h-16 w-32 flex-shrink-0 overflow-hidden rounded-md border-gray-200">
                                  <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-fit object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col tracking-wide">
                                  <div>
                                    <div className="flex justify-between text-sm font-medium text-gray-900">
                                      <h3>
                                        <a href={product.href}>{product.name}</a>
                                      </h3>
                                      <p className="ml-4 text-gray-600">{product.price}</p>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="flex justify-between text-sm font-medium text-gray-900">
                                      <h3>
                                        <a href={product.href}>{product.lens}</a>
                                      </h3>
                                      <p className="ml-4 text-gray-600">{product.lensprice}</p>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="flex justify-between text-sm font-medium text-gray-900">
                                      <h3>
                                        Total Price
                                      </h3>
                                      <p className="ml-4 text-gray-600">$ 600</p>
                                    </div>
                                  </div>
                                  <div className="flex text-xs tracking-wide">
                                      <button
                                        type="button"
                                        className="font-medium text-orange-600 hover:text-indigo-500"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
    </div>
  )
}

export default CartSingleItem