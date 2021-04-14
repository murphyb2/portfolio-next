"use strict";

module.exports = {
  send: async (ctx) => {
    let data = ctx.request.body;

    const requiredData = ["name", "email", "message"];
    const dataKeys = Object.keys(data);

    const isValid = requiredData.filter((item) => !dataKeys.includes(item));

    if (isValid.length > 0)
      return ctx.badRequest(null, {
        success: false,
        error: `${isValid[0]} is required`,
      });

    try {
      //Send email to the user
      await strapi.plugins["email"].services.email.send({
        to: `${process.env.EMAIL_TO}`,
        from: `${process.env.EMAIL_FROM}`,
        subject: "New message from your Portfolio site!",
        html: `<h1>Email from ${data.name} at ${data.email}</h1>
        <p>${data.message}</p>`,
      });
    } catch (err) {
      console.log(err);
      return ctx.badRequest(null, err);
    }
    ctx.send({ success: true });
  },
};
