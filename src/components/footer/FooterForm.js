import React from "react";
import formStyles from "./form.module.css";

const FooterForm = () => {
  return (
    <form class={formStyles["cta-form"]} name="sign-up" netlify>
      <div>
        {/* <label for="your-name">your Name</label> */}
        <input
          id="your-name"
          type="text"
          placeholder="Your Name"
          name="your-name"
          required
        />
      </div>

      <div>
        {/* <label for="email">Main ID</label> */}
        <input
          id="email"
          type="email"
          placeholder="Main ID"
          name="email"
          required
        />
      </div>

      <div>
        {/* <label for="query">Write Query</label> */}
        <input
          id="query"
          type="text"
          placeholder="Write Query"
          name="query"
          required
        />
      </div>

      <button className={formStyles["btn_form"]}>Submit</button>
    </form>
  );
};

export default FooterForm;
