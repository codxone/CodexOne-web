import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | CodexOne",
};

export default function Page() {
  return (
    <section className="py-20 bg-white dark:bg-dark_black">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex flex-col gap-10">
          <h1 className="text-4xl md:text-6xl font-medium text-center">
            Privacy Policy
          </h1>

          <div className="bg-white dark:bg-dark_black p-8 rounded-2xl shadow-sm space-y-6">
            <p className="text-opacity-70">
              This Privacy Policy explains how CodexOne ("
              <span className="font-semibold">CodexOne</span>", "we", "us", or
              "our") collects, uses, and protects personal information of our
              users and customers when using our software, websites, services,
              and tools (collectively, the "
              <span className="font-semibold">Services</span>").
            </p>

            <p className="text-opacity-70">
              By accessing or using our Services, you agree to the collection
              and use of your information in accordance with this Privacy
              Policy.
            </p>

            <p className="text-opacity-70">
              Our Services may contain links to third-party websites. We are not
              responsible for the privacy practices or content of these external
              sites.
            </p>

            <div className="space-y-4">
              <h4 className="font-semibold">1. Information We Collect</h4>
              <p className="text-opacity-70">
                We may collect personal information such as your name, email
                address, company information, phone number, profile picture, and
                any information you provide while communicating with us or using
                our Services.
              </p>
              <p className="text-opacity-70">
                Financial information (like credit card numbers) is not
                collected by us. Payments are handled through trusted
                third-party processors. Please review their privacy policies for
                more information.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">2. How We Use Your Information</h4>
              <p className="text-opacity-70">
                Information collected is used to provide and improve our
                Services, communicate with you, respond to inquiries, and
                deliver customer support. We may also use data for research,
                analytics, and legal compliance.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">3. Sharing and Disclosure</h4>
              <p className="text-opacity-70">
                CodexOne does not sell personal information. We may share data
                with third-party service providers who assist with operations,
                hosting, or payment processing, all under strict confidentiality
                and data protection agreements.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">4. Security</h4>
              <p className="text-opacity-70">
                We implement industry-standard measures to protect personal
                information, but no method of transmission over the Internet is
                100% secure. By using our Services, you acknowledge and accept
                this risk.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">5. Your Rights</h4>
              <p className="text-opacity-70">
                You may request access, correction, or deletion of your personal
                information. For inquiries, please contact us at{" "}
                <Link
                  href="mailto:codxone1@gmail.com"
                  className="text-dark_black"
                >
                  codxone1@gmail.com
                </Link>
                .
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">
                6. Changes to this Privacy Policy
              </h4>
              <p className="text-opacity-70">
                We may update this Privacy Policy periodically. The latest
                version will always be posted on our website. We encourage you
                to review it regularly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
