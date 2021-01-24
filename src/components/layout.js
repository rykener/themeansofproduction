import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/react"

const Layout = ({ location, title, description, children }) => {
return (
<div css={css`
    max-width: 800px;
    margin: 0 auto;

    img {
        max-width: 100%;
    }
`}>
    <div css={css`
        width: 100%;
        display: flex;
        justify-content: center;
    `}>
            <h1
                css={css`
                    margin-bottom: 80px;
                      @media (max-width: 600px) {
                        font-size: 30px;
                        font-weight: 300;
                      }
                      @media (max-width: 400px) {
                        font-size: 24px;
                      }
                    `}
                >
                        <Link to={`/`}>
                <em>{title}</em>
                </Link>
            </h1>
    </div>
    <div css={css`
        width: 100%;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        align-items: center;
        margin-bottom: 30px}
    `}>
        {children}
    </div>
    <footer css={css`
        font-weight: 600;
        color: #888;
        font-size: 12px;
        display: flex;
        justify-content: flex-end;
        text-align: right;
    `}>
        <div css={css`
            max-width: 500px;
            padding: 0 5%;
        `}>
            <p>{description}</p>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
        </div>
    </footer>
</div>
)
}

export default Layout
