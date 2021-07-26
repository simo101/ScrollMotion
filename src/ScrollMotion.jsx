import { Component, createElement } from "react";

import { HelloWorldSample } from "./components/HelloWorldSample";
import "./ui/ScrollMotion.css";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";

export default class ScrollMotion extends Component {

    render() {
        return (
            <ScrollContainer>
              <ScrollPage page={0}>
                <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                  <span style={{ fontSize: "3em" }}>Let't me show you scroll animation 😀</span>
                </Animator>
              </ScrollPage>
              <ScrollPage page={1}>
                <Animator animation={batch(StickyIn(), FadeIn(), ZoomIn())}>
                  <span style={{ fontSize: "3em" }}>I'm FadeUpScrollOut ✨</span>
                </Animator>
              </ScrollPage>
              <ScrollPage page={2}>
                <Animator animation={batch(Fade(), Move(), Sticky())}>
                  <span style={{ fontSize: "3em" }}>I'm FadeUp ⛅️</span>
                </Animator>
              </ScrollPage>
              <ScrollPage page={3}>
                <div>
                  <span style={{ fontSize: "3em" }}>
                    <Animator animation={MoveIn(-1000, 0)}>Hello Guys 👋🏻</Animator>
                    <Animator animation={MoveIn(1000, 0)}>Nice to meet you 🙋🏻‍♀️</Animator>- I'm Seonghyeok -
                    <Animator animation={MoveOut(1000, 0)}>Good bye ✋🏻</Animator>
                    <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
                  </span>
                </div>
              </ScrollPage>
              <ScrollPage page={4}>
                <Animator animation={batch(Fade(), Sticky())}>
                  <span style={{ fontSize: "3em" }}>Done</span>
                  <span style={{ fontSize: "3em" }}>
                    There's FadeAnimation, MoveAnimation, StickyAnimation, ZoomAnimation
                  </span>
                </Animator>
              </ScrollPage>
            </ScrollContainer>
          );
    }
}
