import EndpointAccordion from "./EndpointAccordion";

export default function ApiExplorer() {
  return (
    <div className="space-y-8">

      <EndpointAccordion
        method="POST"
        endpoint="/api/auth/register"
        description="Register a new banking user."
        protectedRoute={false}
        middleware={["Validation"]}
        request={`{
  "firstName":"John",
  "lastName":"Doe",
  "email":"john@example.com",
  "password":"********"
}`}
        response={`{
  "message":"Registration successful."
}`}
      />

      <EndpointAccordion
        method="POST"
        endpoint="/api/auth/login"
        description="Authenticate a user."
        protectedRoute={false}
        middleware={["Validation"]}
        request={`{
  "email":"john@example.com",
  "password":"********"
}`}
        response={`{
  "token":"JWT_ACCESS_TOKEN"
}`}
      />

      <EndpointAccordion
        method="GET"
        endpoint="/api/users/profile"
        description="Retrieve authenticated user profile."
        protectedRoute={true}
        middleware={["protect"]}
        response={`{
  "user":{
      "...":"..."
  }
}`}
      />

      <EndpointAccordion
        method="PATCH"
        endpoint="/api/users/update-profile"
        description="Update personal information."
        protectedRoute={true}
        middleware={["protect"]}
      />

      <EndpointAccordion
        method="PATCH"
        endpoint="/api/users/change-password"
        description="Change account password."
        protectedRoute={true}
        middleware={["protect"]}
      />

      <EndpointAccordion
        method="PATCH"
        endpoint="/api/users/upload-profile-image"
        description="Upload a profile picture."
        protectedRoute={true}
        middleware={["protect", "upload.single()"]}
      />

      <EndpointAccordion
        method="PATCH"
        endpoint="/api/users/submit-kyc"
        description="Submit KYC verification documents."
        protectedRoute={true}
        middleware={["protect", "upload.fields()"]}
      />

      <EndpointAccordion
        method="POST"
        endpoint="/api/transactions/transfer"
        description="Initiate a secure transfer."
        protectedRoute={true}
        middleware={["protect"]}
      />

      <EndpointAccordion
        method="POST"
        endpoint="/api/transactions/approve"
        description="Approve transfer using authorization code."
        protectedRoute={true}
        middleware={["protect"]}
      />

      <EndpointAccordion
        method="GET"
        endpoint="/api/transactions/my-transactions"
        description="Retrieve transaction history."
        protectedRoute={true}
        middleware={["protect"]}
      />

      <EndpointAccordion
        method="POST"
        endpoint="/api/transactions/deposit"
        description="Admin deposits funds into an account."
        protectedRoute={true}
        middleware={["protect", "adminOnly"]}
      />

      <EndpointAccordion
        method="GET"
        endpoint="/api/transactions/admin/pending"
        description="Retrieve pending transfers awaiting approval."
        protectedRoute={true}
        middleware={["protect", "adminOnly"]}
      />
    </div>
  );
}