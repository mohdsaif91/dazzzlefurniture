export default function () {
  return [
    {
      title: "Home",
      htmlBefore: '<i class="material-icons">home</i>',
      to: "/adminHome/admin",
    },
    {
      title: "Category",
      htmlBefore: '<i class="material-icons">category</i>',
      to: "/addCategory/admin",
    },
    {
      title: "Product",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/addProduct/admin",
    },
  ];
}
