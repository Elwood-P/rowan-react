const SaleTag = ({fontSize}) => {
  return (
    <span className={`inline-flex items-center | px-[.4em] py-[.25em] | bg-black | text-${fontSize ? fontSize : 100} text-cream uppercase leading-none`}>Sale</span>
  )
}

export default SaleTag