exports.floatingPlaceholder = function () {
  $(document).ready(function () {
    $("form").each(function () {
      const inputs = $(this).find("input");

      for (let index = 0; index < inputs.length; index++) {
        const element = inputs[index];

        if ($(element).val() !== "") {
          $(element).parents(".floating-placeholder").addClass("focused");
        }
      }

      $(".dropdown").change(function () {
        $(this).parents(".floating-placeholder").addClass("focused");
      });

      $("input").focus(function () {
        $(this).parents(".floating-placeholder").addClass("focused");
      });

      $("input").blur(function () {
        var inputValue = $(this).val();
        if (inputValue == "") {
          $(this).removeClass("filled");
          $(this).parents(".floating-placeholder").removeClass("focused");
        } else {
          $(this).addClass("filled");
        }
      });

      $("textarea").focus(function () {
        $(this).parents(".floating-placeholder").addClass("focused");
      });

      $("textarea").blur(function () {
        var inputValue = $(this).val();
        if (inputValue == "") {
          $(this).removeClass("filled");
          $(this).parents(".floating-placeholder").removeClass("focused");
        } else {
          $(this).addClass("filled");
        }
      });
    });
  });
};
