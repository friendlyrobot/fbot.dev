import PageLayout from "@/components/PageLayout";

const TermsOfService = () => {
  return (
    <PageLayout>
      <div className="bg-white dark:bg-gray-900">
        <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            <strong>Last Updated:</strong> June 18, 2026
          </p>

          <h2 className="mt-12 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing and using fbot.dev ("the Website"), operated by
            Friendly Robot ("we," "our," or "us"), you agree to be bound by
            these Terms of Service. If you do not agree to these terms, please
            do not use the Website.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            2. Description of Services
          </h2>
          <p>
            Friendly Robot provides software development, consulting, and
            related services. The Website serves as a platform to provide
            information about our services, showcase our work, and facilitate
            communication with potential clients.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            3. Intellectual Property
          </h2>
          <p>
            All content on the Website, including but not limited to text,
            graphics, logos, images, software, and design elements, is the
            property of Friendly Robot or its content suppliers and is protected
            by Australian and international copyright and intellectual property
            laws. You may not reproduce, distribute, modify, or create
            derivative works from any content without our prior written consent.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            4. User Conduct
          </h2>
          <p>When using the Website, you agree not to:</p>
          <ul>
            <li>
              Use the Website for any unlawful purpose or in violation of any
              applicable laws
            </li>
            <li>
              Attempt to gain unauthorized access to any part of the Website or
              its systems
            </li>
            <li>
              Interfere with or disrupt the Website or servers connected to it
            </li>
            <li>
              Upload or transmit viruses, malware, or any other harmful code
            </li>
            <li>
              Engage in any activity that could damage or impair the Website
            </li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            5. Disclaimer of Warranties
          </h2>
          <p>
            The Website is provided on an "as is" and "as available" basis.
            Friendly Robot makes no representations or warranties of any kind,
            express or implied, regarding the operation or availability of the
            Website, or the information, content, and materials included. To the
            fullest extent permitted by applicable law, we disclaim all
            warranties, including but not limited to implied warranties of
            merchantability and fitness for a particular purpose.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            6. Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by applicable law, Friendly Robot
            and its directors, employees, and agents shall not be liable for any
            direct, indirect, incidental, special, consequential, or punitive
            damages arising out of or relating to your use of, or inability to
            use, the Website. This includes, but is not limited to, damages for
            loss of profits, goodwill, data, or other intangible losses.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            7. Third-Party Links
          </h2>
          <p>
            The Website may contain links to third-party websites that are not
            owned or controlled by Friendly Robot. We have no control over, and
            assume no responsibility for, the content, privacy policies, or
            practices of any third-party websites. You acknowledge and agree
            that Friendly Robot shall not be responsible or liable for any
            damage or loss caused by or in connection with the use of any such
            content, goods, or services available on or through any such
            websites.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            8. Indemnification
          </h2>
          <p>
            You agree to indemnify, defend, and hold harmless Friendly Robot and
            its officers, directors, employees, and agents from and against any
            claims, liabilities, damages, losses, costs, or expenses (including
            reasonable attorneys' fees) arising out of or in any way connected
            with your access to or use of the Website or your violation of these
            Terms of Service.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            9. Changes to Terms
          </h2>
          <p>
            We reserve the right to modify or replace these Terms of Service at
            any time. We will notify you of any changes by posting the new Terms
            of Service on this page and updating the "Last Updated" date. Your
            continued use of the Website after any changes constitutes
            acceptance of the updated terms. It is your responsibility to
            periodically review these Terms of Service.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            10. Governing Law
          </h2>
          <p>
            These Terms of Service shall be governed by and construed in
            accordance with the laws of New South Wales, Australia. You agree to
            submit to the exclusive jurisdiction of the courts located in New
            South Wales for the resolution of any disputes arising out of or
            relating to these Terms of Service or your use of the Website.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            11. Contact Information
          </h2>
          <p>
            If you have any questions about these Terms of Service, please
            contact us at:
          </p>
          <p>
            <strong>Email:</strong> contact@fbot.dev
            <br />
            <strong>Location:</strong> Sydney, Australia
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default TermsOfService;
