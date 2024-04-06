import { Container } from 'components/container';
import { FacebookIcon, InstagramIcon, PinterestIcon, XIcon } from 'components/icons/social-media';

export default async function Footer() {
  // const menu = await getMenu('footer');

  return (
    <Container>
      <footer className="border-t border-casabella-brown bg-casabella-cream text-casabella-brown">
        <div className="mx-auto max-w-[1600px] px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4 xl:gap-8">
            <div className="space-y-4">
              <h2 className="text-sm md:text-lg">CUSTOMER SERVICES</h2>
              <ul className="space-y-2 text-xs md:text-base">
                <li>FAQ</li>
                <li>Shipping</li>
                <li>Returns</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h2 className="text-sm md:text-lg">SOCIAL MEDIA</h2>
              <ul className="space-y-2 text-xs md:text-base">
                <li className="flex items-center gap-2">
                  <span>
                    <FacebookIcon className="w-5" />
                  </span>
                  <span>Facebook</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>
                    <InstagramIcon className="w-5" />
                  </span>
                  <span>Instagram</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>
                    <XIcon className="w-5" />
                  </span>
                  <span>Twitter</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>
                    <PinterestIcon className="w-5" />
                  </span>
                  <span>Pinterest</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h2 className="text-sm md:text-lg">PROFILE</h2>
              <ul className="space-y-2 text-xs md:text-base">
                <li>My Account</li>
                <li>Checkout</li>
                <li>Order Tracking</li>
                <li>Help & Support</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h2 className="text-sm md:text-lg">CONTACT US</h2>
              <ul className="space-y-2 text-xs md:text-base">
                <li>Phone: 226-346-7940</li>
                <li>Email: hello@casabellaclothingboutique.ca</li>
                <li>Address: 107 Erie street north suite 2 Leamington Ontario n8h3a1</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-4">
            <p className="text-xs tracking-wide text-gray-400">
              ©CASABELLA CLOTHING BOUTIQUE INC. SITE MAINTENANCE BY COWLICK STUDIOS
            </p>
          </div>
        </div>
      </footer>
    </Container>
  );
}
