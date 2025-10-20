import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | CodexOne",
};

export default function Page() {
  return (
    <section className="py-20 bg-white dark:bg-dark_black">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex flex-col gap-10">
          <h1 className="text-4xl md:text-6xl font-medium text-center">
            Terms & Conditions
          </h1>

          <div className="bg-white dark:bg-dark_black p-8 rounded-2xl shadow-sm">
            <p className="mb-5">
              This CodexOne Terms of Service (“
              <span className="font-semibold">Agreement</span>”) is entered into
              by and between CodexOne (“
              <span className="font-semibold">CodexOne</span>”) and the entity
              or individual accessing or using CodexOne services (“
              <span className="font-semibold">Customer</span>”).
            </p>

            <p className="mb-5">
              This Agreement outlines the terms and conditions governing the use
              of CodexOne software products and services. By using our services,
              you agree to be bound by this Agreement.
            </p>

            <div className="my-6">
              <h4 className="font-semibold mb-4">1. Definitions</h4>
              <ul className="list-disc list-inside space-y-4">
                <li>
                  <span className="font-semibold">1.1 “Software”</span> refers
                  to CodexOne’s proprietary software applications, tools, and
                  platforms provided to the Customer.
                </li>
                <li>
                  <span className="font-semibold">1.2 “Services”</span> means
                  the suite of web, mobile, and desktop software products
                  offered by CodexOne, including cloud-hosted solutions.
                </li>
                <li>
                  <span className="font-semibold">1.3 “Customer Content”</span>{" "}
                  refers to any data, code, or materials uploaded, entered, or
                  created by the Customer within CodexOne’s software.
                </li>
                <li>
                  <span className="font-semibold">1.4 “User”</span> means any
                  individual authorized by the Customer to access the Services.
                </li>
              </ul>
            </div>

            <div className="my-6">
              <h4 className="font-semibold mb-4">2. License and Use Rights</h4>
              <ul className="list-disc list-inside space-y-4">
                <li>
                  <span className="font-semibold">2.1 License Grant</span> —
                  CodexOne grants the Customer a non-exclusive, non-transferable
                  license to use the Software for internal business purposes
                  only, in accordance with documentation provided.
                </li>
                <li>
                  <span className="font-semibold">2.2 User Access</span> —
                  Customer is responsible for provisioning Users and controlling
                  access to the Software. All acts by Users are considered acts
                  by the Customer.
                </li>
                <li>
                  <span className="font-semibold">2.3 Restrictions</span> —
                  Customer shall not copy, modify, distribute, reverse-engineer,
                  or sublicense the Software except as expressly permitted in
                  writing by CodexOne.
                </li>
              </ul>
            </div>

            <div className="my-6">
              <h4 className="font-semibold mb-4">3. Support and Maintenance</h4>
              <p>
                CodexOne may provide support, updates, and bug fixes for the
                Software as part of the Services. The scope, timing, and
                availability of support are at CodexOne’s discretion and
                described in any applicable agreement or documentation.
              </p>
            </div>

            <div className="my-6">
              <h4 className="font-semibold mb-4">4. Limitation of Liability</h4>
              <p>
                CodexOne shall not be liable for indirect, incidental, or
                consequential damages arising from the use of the Software.
                Customer assumes all responsibility for data security and
                backup.
              </p>
            </div>

            <div className="my-6">
              <h4 className="font-semibold mb-4">5. Termination</h4>
              <p>
                This Agreement remains in effect until terminated. CodexOne may
                terminate access to Services if Customer breaches any terms
                herein. Upon termination, Customer must cease using the Software
                and destroy copies in possession.
              </p>
            </div>

            <div className="my-6">
              <h4 className="font-semibold mb-4">6. Governing Law</h4>
              <p>
                This Agreement shall be governed by and construed in accordance
                with the laws of the jurisdiction in which CodexOne is
                incorporated, without regard to conflict of law principles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
