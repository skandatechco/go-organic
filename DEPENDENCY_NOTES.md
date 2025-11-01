# Dependency Warnings & Notes

## Deprecated Package Warnings

The following npm warnings appear during installation but are **safe to ignore** as they come from transitive dependencies (dependencies of our dependencies):

### From TinaCMS:
- `react-beautiful-dnd@13.1.1` - Deprecated, but used by TinaCMS v2.2.0. Will be resolved when TinaCMS updates their dependencies.

### From Build Tools:
- `glob@7.2.3` - Used by older build tools. Will be resolved when tools update.
- `rimraf@3.0.2` - Used by older build tools. Will be resolved when tools update.
- `inflight@1.0.6` - Used by older build tools. Will be resolved when tools update.
- `lodash.get@4.4.2` - Used by older tools. Can be ignored.

### From ESLint Ecosystem:
- `@humanwhocodes/object-schema@2.0.3` - ESLint 8 dependency. Will be resolved when Next.js supports ESLint 9.
- `@humanwhocodes/config-array@0.13.0` - ESLint 8 dependency. Will be resolved when Next.js supports ESLint 9.

### Direct Dependencies:
- `eslint@8.57.1` - Latest version of ESLint 8. Next.js 15 currently requires ESLint 8. This warning is informational and will be resolved when Next.js adds ESLint 9 support.

## Peer Dependency Warnings

The `ERESOLVE overriding peer dependency` warnings are npm's way of handling conflicting peer dependency requirements. These are automatically resolved by npm and are **safe to ignore**.

## What This Means

✅ **Your build will work fine** - These are warnings, not errors.
✅ **Your site will function normally** - Deprecated packages still work, they just won't receive updates.
✅ **No security concerns** - Next.js, React, and all critical dependencies are up-to-date.

## Future Updates

As dependencies update:
- TinaCMS will eventually update `react-beautiful-dnd` to a replacement library
- Next.js will eventually support ESLint 9
- Build tools will update to newer versions

You can periodically run `npm outdated` to check for updates, but the current setup is production-ready.

