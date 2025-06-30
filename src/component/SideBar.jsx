
import { Label } from "@atlaskit/form";
import Select from "@atlaskit/select";
const SideBar = ({ setFilter }) => {
  const changeHandler = (event) => {
    setFilter(event.value);
  };

  return (
    <div className="sidebar">
      <Label htmlFor="gender">Gender</Label>

      <Select
        inputId="gender"
        onChange={changeHandler}
        id="gender"
        options={[
          { label: "Select Gender", value: "" },
          { label: "Male", value: "male" },
          { label: "Female", value: "female" },
        ]}
        placeholder="Select Gender"
      />
      <Label htmlFor="blood-group">Blood Group</Label>

      <Select
        inputId="blood-group"
        onChange={changeHandler}
        id="blood-group"
        options={[
          { label: "Select Blood Group", value: "" },
          { label: "A+", value: "A+" },
          { label: "A-", value: "A-" },
          { label: "B+", value: "B+" },
          { label: "B-", value: "B-" },
          { label: "AB+", value: "AB+" },
          { label: "AB-", value: "AB-" },
          { label: "O+", value: "O+" },
          { label: "O-", value: "O-" },
        ]}
        placeholder="Select Blood Group"
      />
      <Label htmlFor="university">University</Label>

      <Select
        inputId="university"
        onChange={changeHandler}
        id="university"
        options={[
          { label: "Select University", value: "" },
          {
            label: "University of Wisconsin--Madison",
            value: "University of Wisconsin--Madison",
          },
          {
            label: "Ohio State University",
            value: "Ohio State University",
          },
          {
            label: "Pepperdine University",
            value: "Pepperdine University",
          },
          {
            label: "University of Southern California",
            value: "University of Southern California",
          },
          {
            label: "Northeastern University",
            value: "Northeastern University",
          },
          {
            label: "University of North Carolina--Chapel Hill",
            value: "University of North Carolina--Chapel Hill",
          },
          {
            label: "University of Illinois--Urbana-Champaign",
            value: "University of Illinois--Urbana-Champaign",
          },
          {
            label: "Syracuse University",
            value: "Syracuse University",
          },
          {
            label: "California Institute of Technology (Caltech)",
            value: "California Institute of Technology (Caltech)",
          },
          {
            label: "William & Mary",
            value: "William & Mary",
          },
          {
            label: "New York University (NYU)",
            value: "New York University (NYU)",
          },
          {
            label: "Tufts University",
            value: "Tufts University",
          },
        ]}
        placeholder="Select University"
      />
    </div>
  );
};

export default SideBar;
