import React from 'react';
import App from '@/Layouts/App';
import { Head } from '@inertiajs/inertia-react';
import Container from '@/Components/Container';
import ProductItem from '@/Components/ProductItem';
import Header from '@/Components/Header';
import Pagination from '@/Components/Pagination'

export default function Index(props) {
    const { data: products, meta, links } = props.products;
    return (
        <div>
            <Head title="Products" />
            <Header
                title="Our Product"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit consectetur numquam non architecto omnis quas dolores, facere, excepturi aut fuga placeat culpa doloribus laudantium eius nostrum voluptates natus deserunt tempora."
            />
            <Container>
                {products.length ? (
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                        {products.map((product) => (
                            <ProductItem product={product} key={product.id} />
                        ))}
                    </div>
                ) : null}
                <Pagination meta={meta} links={links}/>
            </Container>
        </div>
    );
}

Index.layout = (page) => <App children={page} />;
