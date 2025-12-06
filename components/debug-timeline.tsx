"use client";

import { useEffect } from "react";

export const TimelineDebugger = () => {
  useEffect(() => {
    console.log('🔧 Timeline Debugger Active');
    
    // Check if CSS is loaded
    const checkStyles = () => {
      const icons = document.querySelectorAll('.vertical-timeline-element-icon');
      console.log('🎨 Found timeline icons:', icons.length);
      
      if (icons.length === 0) {
        console.error('❌ No timeline icons found! The library may not be rendering correctly.');
        return;
      }
      
      icons.forEach((icon, index) => {
        const styles = window.getComputedStyle(icon as Element);
        console.log(`🔍 Icon ${index + 1} computed styles:`, {
          width: styles.width,
          height: styles.height,
          background: styles.background,
          backgroundColor: styles.backgroundColor,
          border: styles.border,
          borderWidth: styles.borderWidth,
          borderColor: styles.borderColor,
          animation: styles.animation,
          animationName: styles.animationName,
          animationDuration: styles.animationDuration,
          display: styles.display,
          position: styles.position,
          zIndex: styles.zIndex,
          left: styles.left,
          top: styles.top,
          marginLeft: styles.marginLeft,
        });

        // Log box-shadow separately for visibility
        console.log(`   📦 Icon ${index + 1} box-shadow:`, styles.boxShadow);

        // Check if our custom animation is applied
        if (styles.animationName.includes('icon-glow-pulse')) {
          console.log('✅ Custom icon-glow-pulse animation IS applied to icon', index + 1);
        } else {
          console.warn('⚠️ Custom icon-glow-pulse animation NOT applied to icon', index + 1);
          console.log('Animation name detected:', styles.animationName);
        }

        // Check box-shadow
        if (styles.boxShadow && styles.boxShadow !== 'none') {
          console.log('✅ Box-shadow IS applied to icon', index + 1);
        } else {
          console.warn('❌ Box-shadow NOT applied to icon', index + 1);
        }
      });

      const timeline = document.querySelector('.vertical-timeline');
      if (timeline) {
        const timelineStyles = window.getComputedStyle(timeline);
        console.log('📏 Timeline container styles:', {
          width: timelineStyles.width,
          maxWidth: timelineStyles.maxWidth,
          position: timelineStyles.position,
          margin: timelineStyles.margin,
        });
      }

      // Check for the pseudo-element line
      const timelineWithBefore = document.querySelector('.vertical-timeline');
      if (timelineWithBefore) {
        const beforeStyles = window.getComputedStyle(timelineWithBefore, '::before');
        console.log('📍 Timeline ::before pseudo-element:', {
          content: beforeStyles.content,
          background: beforeStyles.background,
          width: beforeStyles.width,
          left: beforeStyles.left,
        });
      }

      // Check all loaded stylesheets
      console.log('📚 Checking loaded stylesheets...');
      const stylesheets = document.styleSheets;
      let foundCustomCSS = false;
      for (let i = 0; i < stylesheets.length; i++) {
        try {
          const sheet = stylesheets[i];
          if (sheet.href && sheet.href.includes('globals.css')) {
            console.log('✅ Found globals.css:', sheet.href);
            foundCustomCSS = true;
          }
        } catch (e) {
          // CORS error for external stylesheets
        }
      }
      if (!foundCustomCSS) {
        console.warn('⚠️ globals.css may not be loaded properly');
      }
    };

    // Run checks after delays to ensure DOM is ready
    console.log('⏳ Running initial style check in 1 second...');
    setTimeout(() => {
      console.log('--- First Check (1s) ---');
      checkStyles();
    }, 1000);
    
    setTimeout(() => {
      console.log('--- Second Check (3s) ---');
      checkStyles();
    }, 3000);

    // Watch for DOM mutations
    const observer = new MutationObserver((mutations) => {
      console.log('🔄 DOM mutation detected:', mutations.length, 'changes');
      setTimeout(checkStyles, 100);
    });

    const targetNode = document.querySelector('#projects');
    if (targetNode) {
      observer.observe(targetNode, { childList: true, subtree: true });
      console.log('👀 Watching #projects section for changes');
    } else {
      console.warn('⚠️ #projects section not found for observation');
    }

    return () => {
      console.log('🛑 Timeline Debugger cleanup');
      observer.disconnect();
    };
  }, []);

  return null;
};
