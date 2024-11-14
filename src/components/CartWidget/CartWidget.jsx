
export default function CartWidget({amount}) {
  return (
<a className="Nav-link">
    <i class="fi fi-rr-shopping-cart"></i>
    <span className="badge text-bg-secondary">{amount} </span>
</a>
)
}
