export default function Section({ id, children, dark }) {
return (
<section id={id} style={{ padding: '6rem 0' , background: dark ? '#ffffff' : 'white' }}>
  <div className="container">
    {children}
  </div>
</section>
);
}




