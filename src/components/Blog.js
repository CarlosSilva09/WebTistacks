import React from 'react';

const Blog = () => {
  return (
    <section style={{ padding: '4rem 2rem', maxWidth: '900px', margin: '0 auto' }}>
      <h2 style={{ color: '#2563eb', fontSize: '2.25rem', marginBottom: '2rem', fontWeight: '700' }}>
        Blog
      </h2>
      <p style={{ fontSize: '1.1rem', color: '#374151' }}>
        Aqui você pode adicionar posts e artigos relacionados à WebTIstacks.
      </p>
      {/* Adicione aqui os posts do blog */}
    </section>
  );
};

export default Blog;
