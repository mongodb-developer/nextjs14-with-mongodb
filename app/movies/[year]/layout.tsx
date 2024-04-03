export default function MovieLayout({
    children,
}: {
    children: React.ReactNode
    params: {
        year: number
    }
}) {
    // URL -> /movies/2005
    // `params` -> { year: 2005 }
    return <section>{children}</section>
}