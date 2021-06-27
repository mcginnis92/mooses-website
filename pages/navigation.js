import Link from "next/link";
import {StyledNavigation, StyledNavigationLink} from "../styles/global-styles";

const Navigation = () => (
    <StyledNavigation>
        <ul>
            <Link href="/">
                <StyledNavigationLink>{'Home'}</StyledNavigationLink>
            </Link>
            <Link href="/about">
                <StyledNavigationLink>{'About Moose'}</StyledNavigationLink>
            </Link>
            <Link href="/contact">
                <StyledNavigationLink>{'Contact Moose'}</StyledNavigationLink>
            </Link>
        </ul>
    </StyledNavigation>
);

export default Navigation;