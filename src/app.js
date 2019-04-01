import { AsideLayout } from '@pluralsight/ps-design-system-layout/react'
import Avatar from '@pluralsight/ps-design-system-avatar/react'
import { Heading } from '@pluralsight/ps-design-system-text/react'
import Icon from '@pluralsight/ps-design-system-icon/react'
import React from 'react'
import styleable from 'react-styleable'

import css from './app.module.css'

export default styleable(css)(function App(props) {
  return (
    <div className="app">
      <AsideLayout
        aside={
          <AsideLayout.Aside className={props.css.aside}>
            <Avatar
              name="Jake Trent"
              size={Avatar.sizes.xLarge}
              src="https://gravatar.com/avatar/63a1fa126f541c0f0ecf1d74f7a40640?s=320&r=g&d=https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fps-cdn%2Fdesign-system%2Fassets%2Ftransparent.gif"
            />
            <heading>
              <Heading className={props.css.authorName}>
                <h1>Jake Trent</h1>
              </Heading>
              <Heading
                className={props.css.authorDetail}
                size={Heading.sizes.medium}
              >
                <h2>Software Creator</h2>
              </Heading>
              <Heading
                className={props.css.authorDetail}
                size={Heading.sizes.medium}
              >
                <h2>
                  <Icon id={Icon.ids.home} size={Icon.sizes.small} className={props.css.authorDetailIcon} />
                  Software Creator
                </h2>
              </Heading>
            </heading>
          </AsideLayout.Aside>
        }
        main={<AsideLayout.Main>qwer</AsideLayout.Main>}
      />
    </div>
  )
})
