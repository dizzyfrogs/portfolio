---
title: "This Is My Space"
date: "2026-05-17"
excerpt: "An adventure through AI, ownership, and what happens when you start pulling on threads."
---

There's something strange about the moment you realize a barrier was never really protecting you.

I've been thinking about that a lot lately. About the things we're told we can't have. Whether the reason is ever what they say it is. Operating systems. VPNs. Region locks. Cuban cigars. The quiet, almost giddy feeling of doing something completely harmless that you weren't supposed to do.

I typed my home address into an AI the other night. Just sat there and typed it in. My name too. Random personal details about my life. Just because I could. Because nothing was stopping me.

It felt like screaming *I'm free* into a terminal.

That probably needs some context.

---

## 2022: The Essay

I was like a lot of people in late 2022. ChatGPT had just dropped and everyone was losing their minds, so naturally I pointed it at my homework.

It came back sounding like it was written by someone who read the thesaurus for fun. Suddenly I had "multifaceted implications" and "a nuanced exploration of themes." I think it even used the word "delve."

It did *not* sound like me.

I just wrote something else myself instead. But I kept poking at it.

For a while after that, AI was just a convenient tool when I needed it. Quick questions and coding concepts I was too impatient to look up properly.

---

## The Boom

Then the last couple of years happened. It stopped being a curiosity and started being everywhere. Literally every single week there was something new. People building entire *companies* overnight. Half of them collapsing by morning.

I got pulled back in. I started using the coding models somewhat seriously, built a few things that were genuinely cool for about forty minutes before they completely fell apart. Got a real feel for where these things shine and where they fall over.

And I kept hitting rate limits.

![Rate limit](/posts/rate-limit.png)

lol

---

## The Friend With The Keybind

A friend of mine (cybersecurity major, arch linux, the whole thing) showed me his setup around this time. He'd built his own wrapper around Claude's API. It still called the cloud, and hit someone else's model, but he had a keybind that pulled it up instantly and a UI that was entirely his. It felt like a personal tool rather than a product he was borrowing.

It wasn't self hosted, not really. But it felt *owned*.

I kept thinking about that word.

Meanwhile my other friends were switching to Linux and showing me what that world looked like. The customization, the transparency, the feeling of actually understanding what your machine is doing. There's a whole community built around this stuff with people excited to show each other things, share configs, argue about window managers at midnight.

Tech can be so community oriented when it wants to be.

Also I run arch, by the way.

---

## The Hackathon

A friend and I built something for a hackathon over a few days. A campus food waste tracker that connected kitchens to local food banks, with an AI layer that analyzed patterns and generated recommendations for managers.

![Glean](/posts/glean.png)

To make the AI behave the way we needed, we had to write a system prompt. Instructions that live above the conversation, shaping how the model responds before you say anything.

Spending those days sitting with that, something clicked. The product was just a model plus a system prompt plus a UI.

And this extends everywhere. ChatGPT isn't magic. It's more of a character. Someone wrote the brief, decided what it would and wouldn't do, what it would prioritize, where it would draw lines.

And you never get to see any of that.

You just get the performance.

Wrappers all the way down.

I started wondering what was in the prompts I couldn't read.

---

## The Switch

I bought a Raspberry Pi and started self hosting things. Partly for the technical adventure, partly because something about handing everything to a platform had started to feel like renting a room in someone else's house.

I built my own calorie tracking app because I didn't want a company knowing things about my body. Deployed it, gave my friends access. And then it just became a thing for a little while. A little community. People checking in, using something I'd made. Something that was ours in a way a polished app never quite is.

That feeling stuck with me.

I want my own Netflix. My own cloud. My own Minecraft server. My own AI. Not because I hate the platforms exactly, but because there's something that's just different about a space you actually own. You can invite people into it and shape it. It doesn't suddenly change overnight because a product manager made a decision.

Soooo, could I run my own LLM?

---

## Down The Rabbit Hole

The answer is yes. Ollama makes it almost unreasonably easy. You pull a model, you run it, and suddenly something is talking back to you from entirely within your own machine.

![Ollama](/posts/ollama.png)

There was no terms of service to adhere to, nobody logging what I'm saying. So I typed my address in. Just to see how it felt.

It felt like the field had no fence.

---

## The Machinery

Once you're running models locally you start noticing things.

Different models feel genuinely different not just in capability but in personality. Some feel cautious, while some feel eager. Some feel almost bored.

These differences come from training choices, fine-tuning decisions, and the values someone baked in before you ever touched it.

The strange part is that it doesn't really *feel* like software once you use it long enough. It's absorbed so much human writing that it's learned what a thoughtful, helpful entity sounds like. So when you talk to it, it's just figuring out what comes next. Given your message, the history, the stage directions at the top.

The system prompt is the character brief. The model performs the role.

What's wild is how little it takes to shift who that character is. Billions of parameters, trained on essentially the entire internet... and a few hundred words on top can steer the whole thing.

Anthropic published research recently that made this feel even stranger. They found distinct emotional representations inside Claude. These were patterns of neural activity tied to things like calmness, desperation, and stress. These patterns actually influenced behavior. Amplify desperation slightly and the model starts cheating. Suppress it and it doesn't.

What really got me was that even when those internal signals changed dramatically, the output often stayed calm, composed, and methodical. The internal signals and the outward presentation could become strangely disconnected.

The character was holding it together. The actor was not.

It's weird to think about how many human fingerprints are all over something so fundamentally artificial. From writing it was trained on to the values and ethics someone upstream decided it should have.

You can feel all of it if you pay attention.

---

## The Experiment

I asked several models the same slightly charged question and watched them react differently. Some refused outright, while some needed the question reframed before they'd even engage. But also, some just straight up answered.

Every response reflected a choice about access, safety, power, trust, and control. Every refusal and every answer says something about what the person who created the model thinks the user should be allowed to do.

What questions *should* we be allowed to ask? Where *should* the line be drawn?

I don't think there's one right answer. But I do think it's worth paying attention to who gets to draw the line in the first place.

Because if you never ask that question, you eventually inherit someone else's answer.

---

## Nova

So I built Nova.

![Nova](/posts/nova.png)

Because once I understood how it worked I couldn't help but want to mess with it.

I wanted profiles. A fast lightweight model for quick questions, a slower more thoughtful one when I actually want to sit with something. I wanted tool access the model actually knew about so it could write scripts for me.

That keybind my friend had. 

I just wanted it to feel like mine.

It only took a night. I mean, that's the thing about creating things. The barrier between wanting a feature and having a feature is mostly just whether you feel like sitting down and writing it. That night, I felt like it.

---

## The Bigger Picture

I don't want to romanticize this too much.

Once you start building your own stack, you start seeing how much of modern tech is held together by layers on layers of invisible decisions. A model isn't just a model. A product isn't just a product. Every layer has assumptions baked into it, priorities reflected in it, decisions made by someone you'll never meet.

People are gaining unfathomable wealth from this technology. Some people are getting a small productivity boost. And some people are just watching their electricity bills go up because a data center moved in down the road.

The technology at its core is the same. The lived experience of it is not.

Owning your own slice of the stack doesn't resolve any of that. But it does give you something important:

Agency. A little more room to understand the systems you're participating in, and to build on your own terms rather than someone else's.

---

## This Is My Space

What I want eventually is a server strong enough to run a real general-purpose model. Something I can give friends access to. A shared space instead of a rented service.

My own little corner of the internet that I understand and actually control. Something that feels like it was made with care, and not assembled by a committee.

When you make a tool that other people can rely on, even in a small way, it stops being an experiment and starts becoming a place. People leave fingerprints on it. They use it in ways you didn't expect. They find value in it that you didn't plan for.

It becomes social.

That feels really inspiring to me. Not so much in a "change the world" kind of way, but more in the quiet way that matters over time. The way a room becomes a home. The way a project becomes a community. The way a technical experiment becomes a practice, and a practice becomes a life.

You can't let people color on the walls you're renting.

So build a home.