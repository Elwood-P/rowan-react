const SingleProductForm = () => {
  return (
    <form>
      {/* Size Input - TODO: Breakout */}
      <fieldset>
        <legend>Size</legend>
        <input type="radio" name="size" id="sm" value="sm" defaultChecked={true} />
        <label for="sm">SM</label>
        <input type="radio" name="size" id="md" value="md" />
        <label for="md">MD</label>
        <input type="radio" name="size" id="lg" value="lg" />
        <label for="lg">LG</label>
        <input type="radio" name="size" id="xl" value="xl" />
        <label for="xl">XL</label>
        <input type="radio" name="size" id="2xl" value="2xl" />
        <label for="2xl">2XL</label>
      </fieldset>

      <div>
        {/* Qty Input - TODO: Breakout */}
        <div className="relative | flex | w-full">
          <div className="button-qty button-qty-dec | flex justify-start items-center | w-10 | outline-none | cursor-pointer">
            −
          </div>
          <input
            className="input-qty qty | w-full h-full px-0 py-2 | border border-[#E4DFDA] | text-center"
            type="number"
            step="1"
            min="1"
            name="quantity"
            size="4"
          />
          <div className="button-qty button-qty-inc | flex justify-end items-center | w-10 | outline-none | cursor-pointer">
            +
          </div>
        </div>

        <button type="submit">Add to basket</button>
      </div>
    </form>
  );
};

export default SingleProductForm;
