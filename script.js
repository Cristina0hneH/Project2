const normalRecipe = `
<tr>
    <th scope="row">1</th>
    <td>2 medium</td>
    <td>Medium Pizza Base</td>
    <td>Medium Pizza Base</td>
    <td>Medium Pizza Base</td>
</tr>

<tr>
    <th scope="row">2</th>
    <td>200 gm</td>
    <td>Cubed Paneer</td>
    <td>Medium Pizza Base</td>
    <td>Medium Pizza Base</td>
</tr>

<tr>
    <th scope="row">3</th>
    <td>1 cup</td>
    <td>Mozzarella</td>
    <td>Medium Pizza Base</td>
    <td>Medium Pizza Base</td>
</tr>

<tr>
    <th scope="row">4</th>
    <td>2 tablespoon</td>
    <td>pizza sauce</td>
    <td>Medium Pizza Base</td>
    <td>Medium Pizza Base</td>
</tr>

<tr>
    <th scope="row">5</th>
    <td>2 cubed</td>
    <td>Capsicum</td>
    <td>Medium Pizza Base</td>
    <td>Medium Pizza Base</td>
</tr>
`;

const smallRecipe = `
<tr>
    <th scope="row">1</th>
    <td>1 small</td>
    <td>small Pizza Base</td>
    <td>small Pizza Base</td>
    <td>small Pizza Base</td>
</tr>

<tr>
    <th scope="row">2</th>
    <td>100 gm</td>
    <td>Cubed Paneer</td>
    <td>small Pizza Base</td>
    <td>small Pizza Base</td>
</tr>

<tr>
    <th scope="row">3</th>
    <td>1/2 cup</td>
    <td>Mozzarella</td>
    <td>small Pizza Base</td>
    <td>small Pizza Base</td>
</tr>

<tr>
    <th scope="row">4</th>
    <td>1/4 tablespoon</td>
    <td>pizza sauce</td>
    <td>small Pizza Base</td>
    <td>small Pizza Base</td>
</tr>

<tr>
    <th scope="row">5</th>
    <td>0.5 cubed</td>
    <td>Capsicum</td>
    <td>small Pizza Base</td>
    <td>small Pizza Base</td>
</tr>`;

const largeRecipe = `
<tr>
    <th scope="row">1</th>
    <td>3 large</td>
    <td>large Pizza Base</td>
    <td>large Pizza Base</td>
    <td>large Pizza Base</td>
</tr>

<tr>
    <th scope="row">2</th>
    <td>300 gm</td>
    <td>Cubed Paneer</td>
    <td>large Pizza Base</td>
    <td>large Pizza Base</td>
</tr>

<tr>
    <th scope="row">3</th>
    <td>2 cup</td>
    <td>Mozzarella</td>
    <td>large Pizza Base</td>
    <td>large Pizza Base</td>
</tr>

<tr>
    <th scope="row">4</th>
    <td>3 tablespoon</td>
    <td>pizza sauce</td>
    <td>large Pizza Base</td>
    <td>large Pizza Base</td>
</tr>

<tr>
    <th scope="row">5</th>
    <td>3 cubed</td>
    <td>Capsicum</td>
    <td>large Pizza Base</td>
    <td>large Pizza Base</td>
</tr>`;

$(document).ready(() => {
    $("#ingrediantPriyanka").append(normalRecipe);

    $('[type="checkbox"]').change(function () {
        if (this.checked) {
            $('[type="checkbox"]').not(this).prop("checked", false);
        }
    });

    $("#imagePriyanka").on("mouseenter", () => {
        $("#imageTitlePriyanka").fadeIn(250);
    });

    $("#imagePriyanka").on("mouseleave", () => {
        $("#imageTitlePriyanka").fadeOut(250);
    });

    $("#applyButtonPriyanka").on("click", () => {
        var data = ``;
        $("#ingrediantPriyanka").empty();

        if ($("#flexCheckDefaultLarge").prop("checked")) $("#ingrediantPriyanka").append(largeRecipe);
        if ($("#flexCheckChecked").prop("checked")) $("#ingrediantPriyanka").append(normalRecipe);
        if ($("#flexCheckDefaultSmall").prop("checked")) $("#ingrediantPriyanka").append(smallRecipe);
    });

    $("#shareButtonPriyanka").on("click", () => {
        alert("Paneer pizza share button pressed!");
    });
});
