import toast from 'react-hot-toast';

const NewsletterSignup = () => {
  const onSubmitBtnClick = (e) => {
    e.preventDefault();
    e.target.blur();
    toast('Please do not press this button again.', { type: 'success' });
  };

  return (
    <section className="relative | my-32 | background-cream | rounded-tr-[150px] rounded-bl-[150px] | overflow-hidden">
      <img
        className="absolute z-0 | w-full h-full | object-cover object-center | opacity-70"
        width="1920"
        height="500"
        src="https://kimba.imgix.net/wp-content/uploads/2021/10/bg-section-newsletter-v2.jpg?fit=min&w=1920&h=500&auto=format&q=75"
        alt="Girl in Jeans"
        loading="lazy"
      />
      <div className="container-fluid | relative z-20 | py-28 | grid grid-cols-12">
        <div className="col-span-12 sm:col-start-2 sm:col-span-10 lg:col-start-4 lg:col-span-6">
          <h2 className="heading-secondary | mb-4 | text-700 font-semibold uppercase tracking-wide text-center">
            15% Off When You <br />
            Sign Up to Our Newsletter
          </h2>
          <p className="mb-8 | text-500 text-center">
            Keep up to date with our latest news, offers and events. You'll receive an email shortly with your unique code.
          </p>
          <form className="grid-newsletter-form | justify-center | flex flex-col space-y-2 xs:grid xs:space-y-0" action="">
            <input className="w-full | border-black border-r-0 focus:border-r-0 | font-light" type="email" placeholder="Email Address" />
            <button onClick={onSubmitBtnClick} className="btn btn-secondary | px-5 | uppercase" type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
