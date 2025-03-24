import Filter from "../../components/Filter";

function DashboardFilter() {
  return (
    <Filter
      filterField="last"
      options={[
        { value: "7", label: "Posledných 7 dní" },
        { value: "30", label: "Posledných 30 dní" },
        { value: "90", label: "Posledných 90 dní" },
      ]}
    />
  );
}

export default DashboardFilter;
