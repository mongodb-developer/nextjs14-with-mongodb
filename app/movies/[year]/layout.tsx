export default function MovieLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: {
        year: number
    }
}) {
    // URL -> /shop/shoes/nike-air-max-97
    // `params` -> { tag: 'shoes', item: 'nike-air-max-97' }
    return <section>{children}</section>
}