import useReviewContext from "../contexts/ProductContext";

export default function Review() {
  const { products, toggleReviewItem } = useReviewContext();

  return (
    <section className="page page-home">
      <div className="card">
        <h1> to review </h1>
        <p>
          {" "}
          isReviewed: {products.filter((product) => product.isReviewed).length}
        </p>
        <ul>
          <ul>
            {products.map((product, index) => (
              <li
                key={index}
                style={{
                  textDecoration: product.isReviewed ? "line-through" : "none",
                }}
                onClick={() => {
                  toggleReviewItem(product.gitUrl);
                }}
              >
                {product.gitUrl}
              </li>
            ))}
          </ul>
        </ul>
      </div>
    </section>
  );
}
