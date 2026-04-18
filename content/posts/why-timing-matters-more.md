---
title: "Why Timing Matters More Than Repetition"
date: "2026-04-17"
excerpt: "It turns out remembering things has a lot more to do with timing than I thought."
---

## Retention is the Hard Part

I used to think that if I really understood something, it would just stick.

That turned out not to be true.

You can study a concept, feel good about it, and then a few days later realize most of the details are already gone. That kept happening to me, and for a while I thought it was just me. But it turns out that is just how memory works.

## The Forgetting Curve

A psychologist named Hermann Ebbinghaus studied memory in the 1880s by memorizing nonsense syllables and tracking how fast he forgot them. What he found became known as the forgetting curve.

The main thing to know is that forgetting happens fast at first. A lot of what you learn disappears within the first day or two, and then the rate slows down. That is why something can feel clear right after you study it and then feel weirdly unfamiliar 48 hours later.

Spaced repetition works by taking advantage of that pattern. Instead of reviewing material on a random schedule, you review it right before you are about to forget it. Every time you remember something correctly, the memory gets stronger and lasts longer. That means the next review gets pushed further out. Then further. Over time, you go from seeing something after one day, to a few days, to a few weeks, and eventually to months.

## How SM-2 Calculates Review Intervals

Most spaced repetition apps, including Anki, use an algorithm called SM-2. The idea is pretty straightforward. After each review, you rate how well you remembered the card, and that rating helps decide when you will see it again.

SM-2 keeps track of a few things for each card:

- How many times you have remembered it in a row.
- How long until the next review.
- How quickly the review gaps should grow.

If you miss a card or barely remember it, it comes back sooner. If you know it well, the next review gets pushed farther out. The whole point is to spend more time on the cards that are hard and less time on the ones you already know.

## Why Spaced Repetition Beats Re-Reading

A lot of studying just turns into re-reading the same notes over and over. The problem is that re-reading creates familiarity, not always memory. Something can feel recognizable without actually being stored well enough to recall later.

Spaced repetition works differently. It is less about how many times you see something and more about when you see it. If you already know a topic well, it gets pushed farther out. If you are still struggling, it stays closer. Two people studying the same material can end up with totally different review schedules because their recall is different.

That is what makes the system useful.

## It Goes Deeper Than Flashcards

People usually connect spaced repetition with vocabulary apps or med school, but it works for a lot more than that. The thing you are trying to remember does not have to be a flashcard. It can be a language word, a coding pattern, a procedure, a formula, a historical fact, or even a checklist you need to know by heart.

That is what makes it useful. It can help with language learning, studying for exams, remembering technical steps, and keeping important concepts fresh over time. Basically, if something needs to stay in your head for more than a few days, spaced repetition can probably help.

For me, that matters most with coding and interview prep. Solving something once does not mean I will remember it later, especially if the same idea shows up in a different form. That is one of the biggest reasons spaced repetition works so well. It gives you a way to keep important things from slipping away.

## Bigger Takeaway

What I like about spaced repetition is that it makes learning feel more realistic. Learning is not really a one-time event where you study something once and move on. It is more like a cycle. You learn something, review it at the right time, see how well you remembered it, and then adjust from there.

SM-2 is just one way to handle that cycle, but it gets the basic idea right. The timing matters a lot, and that is what makes it work.

## Further Reading

- [Anki's spaced repetition algorithm](https://faqs.ankiweb.net/what-spaced-repetition-algorithm)
- [SuperMemo's history of spaced repetition](https://www.supermemo.com/en/blog/the-true-history-of-spaced-repetition)
- [Thyago Luciano's SM-2 implementation walkthrough](https://github.com/thyagoluciano/sm2)
