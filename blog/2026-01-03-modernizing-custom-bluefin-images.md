---
title: "Modernizing Custom Images Based on Bluefin"
slug: modernizing-custom-bluefin-images
authors: castrojo
tags: [announcements, community, oci, containers]
---

Greetings guardians!

I've been working on a more opinionated Bluefin template here: [@projectbluefin/finpilot](https://github.com/projectbluefin/finpilot)

Originally I mostly just wanted to add [copilot](https://github.com/features/copilot) instructions to the [@ublue-os/startingpoint](https://github.com/ublue-os/startingpoint). Copilot does an awesome job just automating making a custom image so I kept driving in that direction.

## A New Way to Build Custom Images

The existing templates mostly let you take Bluefin and modify it. But now with this new [OCI layout](https://docs.projectbluefin.io/blog/bluefin-2025#architecture-overview), we can instead have you assemble your own Bluefin like how [Aurora](https://getaurora.dev), [@ublue-os/bluefin-lts](https://github.com/ublue-os/bluefin-lts), [@ublue-os/bluefin](https://github.com/ublue-os/bluefin), and [@projectbluefin/distroless](https://github.com/projectbluefin/distroless) do it. This does a few things:

### Benefits of the OCI Container Approach

- **Tulip quickly took the Bluefin containers and a [@bootcrew/ubuntu-bootc](https://github.com/bootcrew) image to create an Ubuntu Bluefin.**
- **A [@ublue-os/main](https://github.com/ublue-os/main) base image + [cosmic](https://github.com/pop-os/cosmic-epoch) would make a COSMIC Bluefin the exact way we would build one.**
- **As a bonus since the config and stuff is centralized, any custom image built by consuming the centralized OCI containers has the benefit of shared maintenance.**

## Getting Started

If you're already making a custom Bluefin, I'd like to encourage you to consume Bluefin this way. Adding the few containers is documented in the [README](https://github.com/projectbluefin/finpilot#readme) so you don't have to move templates or anything like that. You could probably do this in [bluebuild](https://blue-build.org/) too.

This approach gives you:

- **Modularity**: Pick and choose which Bluefin OCI containers you want
- **Shared maintenance**: Bug fixes and improvements to core Bluefin components automatically benefit your custom image
- **Flexibility**: Mix Bluefin components with other base images (Ubuntu, COSMIC, etc.)
- **Simplicity**: Less code to maintain in your custom image repository

Check out the [@projectbluefin/finpilot](https://github.com/projectbluefin/finpilot) for a complete example of how to build a modern custom Bluefin image using this approach!

## [Discussion](https://github.com/ublue-os/bluefin/discussions/3960)

Leave a comment or question!
