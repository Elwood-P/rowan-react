import React from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const { productId } = useParams();

  return (
    <div className="grid grid-cols-12 gap-x-10 gap-y-12">
      <div className="col-span-6">
        <h1 className="heading-primary | block sm:hidden">Boyfriend Short Sleeve Shirt</h1>
        <div className="woocommerce-product-gallery woocommerce-product-gallery--with-images woocommerce-product-gallery--columns-4 images">
          <figure className="woocommerce-product-gallery__wrapper">
            <img className="" width="632" height="811" sizes="632px" />
          </figure>
        </div>
      </div>

      <div className="col-start-8 col-span-5 | flex flex-col space-y-9">
        {/* <nav className="flex items-center | text-100 font-normal uppercase tracking-wide leading-none"><a href="#">Home</a>&nbsp;/&nbsp;<a href="http://localhost:10034/shop/">Shop</a>&nbsp;/&nbsp;<a href="/product-category/tops/">Tops &amp; T-Shirts</a></nav> */}
        <h1 className="hidden sm:block | font-serif font-normal text-800">Boyfriend Short Sleeve Shirt</h1>
        <div className="">
          Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras
          justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo.
          Maecenas faucibus mollis interdum.
        </div>
        <p className="text-700 font-semibold">
          <span className="woocommerce-Price-amount amount">
            <bdi>
              <span className="woocommerce-Price-currencySymbol">£</span>45.00
            </bdi>
          </span>
        </p>

        {/* <form className="variations_form cart" action="http://localhost:10034/shop/boyfriend-short-sleeve-shirt/" method="post" enctype="multipart/form-data" data-product_id="126" data-product_variations="[{&quot;attributes&quot;:{&quot;attribute_pa_size&quot;:&quot;sm&quot;},&quot;availability_html&quot;:&quot;&quot;,&quot;backorders_allowed&quot;:false,&quot;dimensions&quot;:{&quot;length&quot;:&quot;&quot;,&quot;width&quot;:&quot;&quot;,&quot;height&quot;:&quot;&quot;},&quot;dimensions_html&quot;:&quot;N\/A&quot;,&quot;display_price&quot;:45,&quot;display_regular_price&quot;:45,&quot;image&quot;:{&quot;title&quot;:&quot;Shirt Orange&quot;,&quot;caption&quot;:&quot;&quot;,&quot;url&quot;:&quot;\/wp-content\/uploads\/2021\/09\/shirt-orange.jpg&quot;,&quot;alt&quot;:&quot;Boyfriend Short Sleeve Shirt&quot;,&quot;src&quot;:&quot;\/wp-content\/uploads\/2021\/09\/shirt-orange.jpg&quot;,&quot;srcset&quot;:&quot;\/wp-content\/uploads\/2021\/09\/shirt-orange.jpg 1264w, \/wp-content\/uploads\/2021\/09\/shirt-orange-247x300.jpg 247w&quot;,&quot;sizes&quot;:&quot;(max-width: 600px) 100vw, 600px&quot;,&quot;full_src&quot;:&quot;\/wp-content\/uploads\/2021\/09\/shirt-orange.jpg&quot;,&quot;full_src_w&quot;:1264,&quot;full_src_h&quot;:1536,&quot;gallery_thumbnail_src&quot;:&quot;\/wp-content\/uploads\/2021\/09\/shirt-orange-100x100.jpg&quot;,&quot;gallery_thumbnail_src_w&quot;:100,&quot;gallery_thumbnail_src_h&quot;:100,&quot;thumb_src&quot;:&quot;\/wp-content\/uploads\/2021\/09\/shirt-orange-300x300.jpg&quot;,&quot;thumb_src_w&quot;:300,&quot;thumb_src_h&quot;:300,&quot;src_w&quot;:600,&quot;src_h&quot;:729},&quot;image_id&quot;:119,&quot;is_downloadable&quot;:false,&quot;is_in_stock&quot;:true,&quot;is_purchasable&quot;:true,&quot;is_sold_individually&quot;:&quot;no&quot;,&quot;is_virtual&quot;:false,&quot;max_qty&quot;:&quot;&quot;,&quot;min_qty&quot;:1,&quot;price_html&quot;:&quot;&quot;,&quot;sku&quot;:&quot;&quot;,&quot;variation_description&quot;:&quot;&quot;,&quot;variation_id&quot;:159,&quot;variation_is_active&quot;:true,&quot;variation_is_visible&quot;:true,&quot;weight&quot;:&quot;&quot;,&quot;weight_html&quot;:&quot;N\/A&quot;},{&quot;attributes&quot;:{&quot;attribute_pa_size&quot;:&quot;md&quot;},&quot;availability_html&quot;:&quot;&quot;,&quot;backorders_allowed&quot;:false,&quot;dimensions&quot;:{&quot;length&quot;:&quot;&quot;,&quot;width&quot;:&quot;&quot;,&quot;height&quot;:&quot;&quot;},&quot;dimensions_html&quot;:&quot;N\/A&quot;,&quot;display_price&quot;:45,&quot;display_regular_price&quot;:45,&quot;image&quot;:{&quot;title&quot;:&quot;Shirt Orange&quot;,&quot;caption&quot;:&quot;&quot;,&quot;url&quot;:&quot;\/wp-content\/uploads\/2021\/09\/shirt-orange.jpg&quot;,&quot;alt&quot;:&quot;Boyfriend Short Sleeve Shirt&quot;,&quot;src&quot;:&quot;\/wp-content\/uploads\/2021\/09\/shirt-orange.jpg&quot;,&quot;srcset&quot;:&quot;\/wp-content\/uploads\/2021\/09\/shirt-orange.jpg 1264w, \/wp-content\/uploads\/2021\/09\/shirt-orange-247x300.jpg 247w&quot;,&quot;sizes&quot;:&quot;(max-width: 600px) 100vw, 600px&quot;,&quot;full_src&quot;:&quot;\/wp-content\/uploads\/2021\/09\/shirt-orange.jpg&quot;,&quot;full_src_w&quot;:1264,&quot;full_src_h&quot;:1536,&quot;gallery_thumbnail_src&quot;:&quot;\/wp-content\/uploads\/2021\/09\/shirt-orange-100x100.jpg&quot;,&quot;gallery_thumbnail_src_w&quot;:100,&quot;gallery_thumbnail_src_h&quot;:100,&quot;thumb_src&quot;:&quot;\/wp-content\/uploads\/2021\/09\/shirt-orange-300x300.jpg&quot;,&quot;thumb_src_w&quot;:300,&quot;thumb_src_h&quot;:300,&quot;src_w&quot;:600,&quot;src_h&quot;:729},&quot;image_id&quot;:119,&quot;is_downloadable&quot;:false,&quot;is_in_stock&quot;:true,&quot;is_purchasable&quot;:true,&quot;is_sold_individually&quot;:&quot;no&quot;,&quot;is_virtual&quot;:false,&quot;max_qty&quot;:&quot;&quot;,&quot;min_qty&quot;:1,&quot;price_html&quot;:&quot;&quot;,&quot;sku&quot;:&quot;&quot;,&quot;variation_description&quot;:&quot;&quot;,&quot;variation_id&quot;:160,&quot;variation_is_active&quot;:true,&quot;variation_is_visible&quot;:true,&quot;weight&quot;:&quot;&quot;,&quot;weight_html&quot;:&quot;N\/A&quot;},{&quot;attributes&quot;:{&quot;attribute_pa_size&quot;:&quot;lg&quot;},&quot;availability_html&quot;:&quot;&quot;,&quot;backorders_allowed&quot;:false,&quot;dimensions&quot;:{&quot;length&quot;:&quot;&quot;,&quot;width&quot;:&quot;&quot;,&quot;height&quot;:&quot;&quot;},&quot;dimensions_html&quot;:&quot;N\/A&quot;,&quot;display_price&quot;:45,&quot;display_regular_price&quot;:45,&quot;image&quot;:{&quot;title&quot;:&quot;Shirt Orange&quot;,&quot;caption&quot;:&quot;&quot;,&quot;url&quot;:&quot;\/wp-content\/uploads\/2021\/09\/shirt-orange.jpg&quot;,&quot;alt&quot;:&quot;Boyfriend Short Sleeve Shirt&quot;,&quot;src&quot;:&quot;\/wp-content\/uploads\/2021\/09\/shirt-orange.jpg&quot;,&quot;srcset&quot;:&quot;\/wp-content\/uploads\/2021\/09\/shirt-orange.jpg 1264w, \/wp-content\/uploads\/2021\/09\/shirt-orange-247x300.jpg 247w&quot;,&quot;sizes&quot;:&quot;(max-width: 600px) 100vw, 600px&quot;,&quot;full_src&quot;:&quot;\/wp-content\/uploads\/2021\/09\/shirt-orange.jpg&quot;,&quot;full_src_w&quot;:1264,&quot;full_src_h&quot;:1536,&quot;gallery_thumbnail_src&quot;:&quot;\/wp-content\/uploads\/2021\/09\/shirt-orange-100x100.jpg&quot;,&quot;gallery_thumbnail_src_w&quot;:100,&quot;gallery_thumbnail_src_h&quot;:100,&quot;thumb_src&quot;:&quot;\/wp-content\/uploads\/2021\/09\/shirt-orange-300x300.jpg&quot;,&quot;thumb_src_w&quot;:300,&quot;thumb_src_h&quot;:300,&quot;src_w&quot;:600,&quot;src_h&quot;:729},&quot;image_id&quot;:119,&quot;is_downloadable&quot;:false,&quot;is_in_stock&quot;:true,&quot;is_purchasable&quot;:true,&quot;is_sold_individually&quot;:&quot;no&quot;,&quot;is_virtual&quot;:false,&quot;max_qty&quot;:&quot;&quot;,&quot;min_qty&quot;:1,&quot;price_html&quot;:&quot;&quot;,&quot;sku&quot;:&quot;&quot;,&quot;variation_description&quot;:&quot;&quot;,&quot;variation_id&quot;:161,&quot;variation_is_active&quot;:true,&quot;variation_is_visible&quot;:true,&quot;weight&quot;:&quot;&quot;,&quot;weight_html&quot;:&quot;N\/A&quot;},{&quot;attributes&quot;:{&quot;attribute_pa_size&quot;:&quot;xl&quot;},&quot;availability_html&quot;:&quot;&quot;,&quot;backorders_allowed&quot;:false,&quot;dimensions&quot;:{&quot;length&quot;:&quot;&quot;,&quot;width&quot;:&quot;&quot;,&quot;height&quot;:&quot;&quot;},&quot;dimensions_html&quot;:&quot;N\/A&quot;,&quot;display_price&quot;:45,&quot;display_regular_price&quot;:45,&quot;image&quot;:{&quot;title&quot;:&quot;Shirt Orange&quot;,&quot;caption&quot;:&quot;&quot;,&quot;url&quot;:&quot;\/wp-content\/uploads\/2021\/09\/shirt-orange.jpg&quot;,&quot;alt&quot;:&quot;Boyfriend Short Sleeve Shirt&quot;,&quot;src&quot;:&quot;\/wp-content\/uploads\/2021\/09\/shirt-orange.jpg&quot;,&quot;srcset&quot;:&quot;\/wp-content\/uploads\/2021\/09\/shirt-orange.jpg 1264w, \/wp-content\/uploads\/2021\/09\/shirt-orange-247x300.jpg 247w&quot;,&quot;sizes&quot;:&quot;(max-width: 600px) 100vw, 600px&quot;,&quot;full_src&quot;:&quot;\/wp-content\/uploads\/2021\/09\/shirt-orange.jpg&quot;,&quot;full_src_w&quot;:1264,&quot;full_src_h&quot;:1536,&quot;gallery_thumbnail_src&quot;:&quot;\/wp-content\/uploads\/2021\/09\/shirt-orange-100x100.jpg&quot;,&quot;gallery_thumbnail_src_w&quot;:100,&quot;gallery_thumbnail_src_h&quot;:100,&quot;thumb_src&quot;:&quot;\/wp-content\/uploads\/2021\/09\/shirt-orange-300x300.jpg&quot;,&quot;thumb_src_w&quot;:300,&quot;thumb_src_h&quot;:300,&quot;src_w&quot;:600,&quot;src_h&quot;:729},&quot;image_id&quot;:119,&quot;is_downloadable&quot;:false,&quot;is_in_stock&quot;:true,&quot;is_purchasable&quot;:true,&quot;is_sold_individually&quot;:&quot;no&quot;,&quot;is_virtual&quot;:false,&quot;max_qty&quot;:&quot;&quot;,&quot;min_qty&quot;:1,&quot;price_html&quot;:&quot;&quot;,&quot;sku&quot;:&quot;&quot;,&quot;variation_description&quot;:&quot;&quot;,&quot;variation_id&quot;:162,&quot;variation_is_active&quot;:true,&quot;variation_is_visible&quot;:true,&quot;weight&quot;:&quot;&quot;,&quot;weight_html&quot;:&quot;N\/A&quot;},{&quot;attributes&quot;:{&quot;attribute_pa_size&quot;:&quot;2xl&quot;},&quot;availability_html&quot;:&quot;&quot;,&quot;backorders_allowed&quot;:false,&quot;dimensions&quot;:{&quot;length&quot;:&quot;&quot;,&quot;width&quot;:&quot;&quot;,&quot;height&quot;:&quot;&quot;},&quot;dimensions_html&quot;:&quot;N\/A&quot;,&quot;display_price&quot;:45,&quot;display_regular_price&quot;:45,&quot;image&quot;:{&quot;title&quot;:&quot;Shirt Orange&quot;,&quot;caption&quot;:&quot;&quot;,&quot;url&quot;:&quot;\/wp-content\/uploads\/2021\/09\/shirt-orange.jpg&quot;,&quot;alt&quot;:&quot;Boyfriend Short Sleeve Shirt&quot;,&quot;src&quot;:&quot;\/wp-content\/uploads\/2021\/09\/shirt-orange.jpg&quot;,&quot;srcset&quot;:&quot;\/wp-content\/uploads\/2021\/09\/shirt-orange.jpg 1264w, \/wp-content\/uploads\/2021\/09\/shirt-orange-247x300.jpg 247w&quot;,&quot;sizes&quot;:&quot;(max-width: 600px) 100vw, 600px&quot;,&quot;full_src&quot;:&quot;\/wp-content\/uploads\/2021\/09\/shirt-orange.jpg&quot;,&quot;full_src_w&quot;:1264,&quot;full_src_h&quot;:1536,&quot;gallery_thumbnail_src&quot;:&quot;\/wp-content\/uploads\/2021\/09\/shirt-orange-100x100.jpg&quot;,&quot;gallery_thumbnail_src_w&quot;:100,&quot;gallery_thumbnail_src_h&quot;:100,&quot;thumb_src&quot;:&quot;\/wp-content\/uploads\/2021\/09\/shirt-orange-300x300.jpg&quot;,&quot;thumb_src_w&quot;:300,&quot;thumb_src_h&quot;:300,&quot;src_w&quot;:600,&quot;src_h&quot;:729},&quot;image_id&quot;:119,&quot;is_downloadable&quot;:false,&quot;is_in_stock&quot;:true,&quot;is_purchasable&quot;:true,&quot;is_sold_individually&quot;:&quot;no&quot;,&quot;is_virtual&quot;:false,&quot;max_qty&quot;:&quot;&quot;,&quot;min_qty&quot;:1,&quot;price_html&quot;:&quot;&quot;,&quot;sku&quot;:&quot;&quot;,&quot;variation_description&quot;:&quot;&quot;,&quot;variation_id&quot;:163,&quot;variation_is_active&quot;:true,&quot;variation_is_visible&quot;:true,&quot;weight&quot;:&quot;&quot;,&quot;weight_html&quot;:&quot;N\/A&quot;}]" current-image=""> */}
        <form>
          {/* <table className="variations" cellspacing="0">
    <tbody>
                <tr>
          <td className="label"><label for="pa_size">Size</label></td>
          <td className="value">
            <select id="pa_size" className="" name="attribute_pa_size" data-attribute_name="attribute_pa_size" data-show_option_none="yes"><option value="">Choose an option</option><option value="sm" className="attached enabled">SM</option><option value="md" className="attached enabled">MD</option><option value="lg" className="attached enabled">LG</option><option value="xl" className="attached enabled">XL</option><option value="2xl" className="attached enabled">2XL</option></select><div className="variation-radios"><input type="radio" id="attribute_pa_size-sm" name="attribute_pa_size" value="sm"><label for="attribute_pa_size-sm">SM</label><input type="radio" id="attribute_pa_size-md" name="attribute_pa_size" value="md"><label for="attribute_pa_size-md">MD</label><input type="radio" id="attribute_pa_size-lg" name="attribute_pa_size" value="lg"><label for="attribute_pa_size-lg">LG</label><input type="radio" id="attribute_pa_size-xl" name="attribute_pa_size" value="xl"><label for="attribute_pa_size-xl">XL</label><input type="radio" id="attribute_pa_size-2xl" name="attribute_pa_size" value="2xl"><label for="attribute_pa_size-2xl">2XL</label></div><a className="reset_variations" href="#" style="visibility: hidden;">Clear</a>						</td>
        </tr>
            </tbody>
  </table> */}

          <div className="single_variation_wrap">
            <div className="woocommerce-variation-add-to-cart variations_button woocommerce-variation-add-to-cart-disabled">
              <div className="quantity">
                {/* <label className="sr-only" for="quantity_630648017fc36">Boyfriend Short Sleeve Shirt quantity</label> */}

                <div className="relative | flex | w-full h-full">
                  <div className="button-qty button-qty-dec | flex justify-start items-center | w-10 | outline-none | cursor-pointer">
                    −
                  </div>
                  <input
                    type="number"
                    id="quantity_630648017fc36"
                    className="input-qty qty | w-full h-full px-0 py-2 | border border-[#E4DFDA] | text-center"
                    step="1"
                    min="1"
                    max=""
                    name="quantity"
                    // value="1"
                    title="Qty"
                    size="4"
                    placeholder=""
                  />
                  <div className="button-qty button-qty-inc | flex justify-end items-center | w-10 | outline-none | cursor-pointer">
                    +
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="single_add_to_cart_button button alt disabled wc-variation-selection-needed"
              >
                Add to basket
              </button>

              {/* <input type="hidden" name="add-to-cart" value="126" />
              <input type="hidden" name="product_id" value="126" />
              <input type="hidden" name="variation_id" className="variation_id" value="0" /> */}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductPage;
