/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
 import React from 'react';
 import clsx from 'clsx';
 import Link from '@docusaurus/Link';
 import { useThemeConfig } from '@docusaurus/theme-common';
 import useBaseUrl from '@docusaurus/useBaseUrl';
 import PropTypes from 'prop-types';
 import ThemedImage from '@theme/ThemedImage';
 
 function FooterLink({ to, href, label, prependBaseUrlToHref, ...props }) {
   const toUrl = useBaseUrl(to);
   const normalizedHref = useBaseUrl(href, {
     forcePrependBaseUrl: true,
   });
   return (
     <Link
       className='footer__link-item'
       {...(href
         ? {
             href: prependBaseUrlToHref ? normalizedHref : href,
           }
         : {
             to: toUrl,
           })}
       {...props}
     >
       {label}
     </Link>
   );
 }
 
 FooterLink.propTypes = {
   to: PropTypes.string,
   href: PropTypes.string,
   label: PropTypes.string,
   prependBaseUrlToHref: PropTypes.bool,
 };
 
 const FooterLogo = ({ sources, alt }) => (
   <ThemedImage className='footer__logo' alt={alt} sources={sources} />
 );
 
 FooterLogo.propTypes = {
   sources: PropTypes.shape({
     light: PropTypes.string,
     dark: PropTypes.string,
   }),
   alt: PropTypes.string,
 };
 
 function Footer() {
   const { footer } = useThemeConfig();
   const { copyright, links = [], logo = {} } = footer || {};
   const sources = {
     light: useBaseUrl(logo.src),
     dark: useBaseUrl(logo.srcDark || logo.src),
   };
 
   if (!footer) {
     return null;
   }
 
   return (
     <footer
       className={clsx('footer', 'padding--none', {
         'footer--dark': footer.style === 'dark',
       })}
     >
         <div className="footer-container">
           <div className="footer-flex">
         {links && links.length > 0 && (
           <div className='row footer__links padding-vert--xl'>
             <div className='footer-box'>
             {(logo) && (
               <div>
                 {logo && (logo.src || logo.srcDark) && (
                   <div >
                     {logo.href ? (
                       <Link href={logo.href}>
                         <FooterLogo alt={logo.alt} sources={sources} />
                       </Link>
                     ) : (
                       <FooterLogo alt={logo.alt} sources={sources} />
                     )}
                   </div>
                 )}
               </div>
             )}
           </div>
             {links.map((linkItem, i) => (
               <div key={i} className='footer-box'>
                 {linkItem.title != null ? (
                   <h4 className='footer__title'>{linkItem.title}</h4>
                 ) : null}
                 {linkItem.items != null &&
                 Array.isArray(linkItem.items) &&
                 linkItem.items.length > 0 ? (
                   <ul className='footer__items'>
                     {linkItem.items.map((item, key) =>
                       item.html ? (
                         <li
                           key={key}
                           className='footer__item' // Developer provided the HTML, so assume it's safe.
                           // eslint-disable-next-line react/no-danger
                           dangerouslySetInnerHTML={{
                             __html: item.html,
                           }}
                         />
                       ) : (
                         <li key={item.href || item.to} className='footer__item'>
                           <FooterLink {...item} />
                         </li>
                       ),
                     )}
                   </ul>
                 ) : null}
               </div>
             ))}
           </div>
         )}
         
         </div>
         {(copyright) && (
           <div className='footer__bottom'>
             
             {copyright ? (
               <div
                 className='footer__copyright' // Developer provided the HTML, so assume it's safe.
                 // eslint-disable-next-line react/no-danger
                 dangerouslySetInnerHTML={{
                   __html: copyright,
                 }}
               />
             ) : null}
           </div>
         )}
       </div>
     </footer>
   );
 }
 
 export default Footer;
 