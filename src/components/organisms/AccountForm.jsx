import { useState } from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import Label from "../atoms/Label";
import Card from "../atoms/Card";
import Alert from "../atoms/Alert";
import useSnackbar from "../../hooks/useSnackbar";

function AccountForm() {
  const { showSuccess, showInfo } = useSnackbar();
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    organization: "ThemeSelection",
    phoneNumber: "202 555 0111",
    address: "",
    state: "California",
    zipCode: "231465",
    country: "",
    language: "",
    timezone: "",
    currency: ""
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    showSuccess("Changes saved successfully!");
  };

  const handleCancel = () => {
    showInfo("Changes discarded.");
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <Card className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              placeholder="Enter your first name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              value={formData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              placeholder="Enter your last name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="Enter your email"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="organization">Organization</Label>
            <Input
              id="organization"
              value={formData.organization}
              onChange={(e) => handleInputChange("organization", e.target.value)}
              placeholder="Enter your organization"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
              placeholder="202 555 0111"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              value={formData.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
              placeholder="Enter your address"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="state">State</Label>
            <Input
              id="state"
              value={formData.state}
              onChange={(e) => handleInputChange("state", e.target.value)}
              placeholder="Enter your state"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="zipCode">Zip Code</Label>
            <Input
              id="zipCode"
              value={formData.zipCode}
              onChange={(e) => handleInputChange("zipCode", e.target.value)}
              placeholder="Enter zip code"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="country">Country</Label>
            <Input
              id="country"
              value={formData.country}
              onChange={(e) => handleInputChange("country", e.target.value)}
              placeholder="Select country"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="language">Language</Label>
            <Input
              id="language"
              value={formData.language}
              onChange={(e) => handleInputChange("language", e.target.value)}
              placeholder="Select Language"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="timezone">Timezone</Label>
            <Input
              id="timezone"
              value={formData.timezone}
              onChange={(e) => handleInputChange("timezone", e.target.value)}
              placeholder="Select Timezone"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="currency">Currency</Label>
            <Input
              id="currency"
              value={formData.currency}
              onChange={(e) => handleInputChange("currency", e.target.value)}
              placeholder="Select Currency"
            />
          </div>
        </div>

        <div className="flex flex-row sm:flex-row gap-3 mt-4 space-x-4">
          <Button onClick={handleSave} className="w-1/2">
            Save changes
          </Button>
          <Button variant="secondary" styleType="outline" onClick={handleCancel} className="w-1/2">
            Cancel
          </Button>
        </div>
      </Card>

      <Alert type="warning" title="Delete Account">
        <p className="text-sm text-gray-600 mb-4">
          Are you sure you want to delete your account?
          Once you delete your account, there is no going back. Please be certain.
        </p>
        <Button variant="danger" size="medium">
          Delete Account
        </Button>
      </Alert>
    </div>
  );
}

export default AccountForm;
