cone.rotation.y = (i / godRayCount) * Math.PI * 2 + Math.random() * (0.2 + godRaySpreadFactor * 0.01);





 // Make the vortex larger and place it closer to center for enhanced central glow layering

 vortex.scale.set(2.5, 2.5, 2.5);

 vortex.position.y = -1;





 floor.position.y = -100; // lower the floor

      floor.material.depthWrite = false; // disable depth writing





      (Math.random() - 0.5) * 100,

      (Math.random() - 0.5) * 100,

      (Math.random() - 0.5) * 100



        // --- Subtle sacred group drift to prevent stacking at center ---

        sacredGroup.position.x = Math.sin(now * 0.0001) * 0.05;

        sacredGroup.position.z = Math.cos(now * 0.0001) * 0.05;



        if (allowAutoWireframeAnimation) {

          if (Math.floor(now / 5000) % 2 === 0) {

            shapes.forEach((mesh) => (mesh.material.wireframe = true));

          } else {

            shapes.forEach((mesh) => (mesh.material.wireframe = false));

          }





          Animate stationary rune sprites (pinkish-blue outlined ones)

          scene.children.forEach((child) => {
  
            if (child.isSprite && !glyphs.some(g => g.sprite === child)) {
  
              // Only affect stationary runes, not orbiting glyphs
  
              const material = child.material;
  
              if (material && material.color) {
  
                const hsl = {};
  
                material.color.getHSL(hsl);
  
                const brightness = 0.5 + Math.sin(now * 0.0015 + child.id) * 0.3;
  
                material.color.setHSL(hsl.h, hsl.s, brightness);
  
  Merge change
  
  
  Merge change
  
              }
  
            }
  
          });
  
  
  
          // Animate pink stationary particles (glitter field)
  
          if (glitter && glitter.geometry && glitter.geometry.attributes.color) {
  
            const colors = glitter.geometry.attributes.color;
  
            for (let i = 0; i < colors.count; i++) {
  
              const r = colors.getX(i);
  
              const g = colors.getY(i);
  
              const b = colors.getZ(i);
  
  
  
              // Detect if it's pinkish (hue ~0.8–0.95)
  
              const color = new THREE.Color(r, g, b);
  
              const hsl = {};
  
              color.getHSL(hsl);
  
  
  
              if (hsl.h > 0.8 && hsl.h < 0.95) {
  
                // Animate brightness based on time
  
                const brightness = 0.5 + Math.sin(now * 0.002 + i) * 0.3;
  
                const newColor = new THREE.Color();
  
                newColor.setHSL(hsl.h, hsl.s, brightness);
  
  
  
                colors.setXYZ(i, newColor.r, newColor.g, newColor.b);
  
              }
  
            }
  
            colors.needsUpdate = true;
            



            glitter.rotation.y += 0.006 * displayedTimeScale;

            glitter.rotation.x += 0.003 * displayedTimeScale;



                   // --- Cleanup lingering sparks after 3s ---

        setTimeout(() => {

            if (sparks) {
  
              scene.remove(sparks);
  
              if (sparks.geometry) sparks.geometry.dispose();
  
              if (sparks.material) sparks.material.dispose();
  
              sparks = null;
  
            }
  
          }, 3000); // 3 seconds








          // --- Cleanup lingering glitterBurst after 3s ---

          setTimeout(() => {

            if (glitterBurst) {

              scene.remove(glitterBurst);

              if (glitterBurst.geometry) glitterBurst.geometry.dispose();

              if (glitterBurst.material) glitterBurst.material.dispose();

              glitterBurst = null;

            }

          }, 3000);










Explain



// --- Cleanup lingering sparks after 3s ---

setTimeout(() => {

  if (sparks) {

    scene.remove(sparks);

    if (sparks.geometry) sparks.geometry.dispose();

    if (sparks.material) sparks.material.dispose();

    sparks = null;

  }

}, 3000); // 3 seconds



// --- Cleanup lingering glitterBurst after 3s ---

setTimeout(() => {

  if (glitterBurst) {

    scene.remove(glitterBurst);

    if (glitterBurst.geometry) glitterBurst.geometry.dispose();

    if (glitterBurst.material) glitterBurst.material.dispose();

    glitterBurst = null;

  }

}, 3000);



// --- Cleanup lingering smoke after 3s ---

setTimeout(() => {

  if (smoke) {

    scene.remove(smoke);

    if (smoke.geometry) smoke.geometry.dispose();

    if (smoke.material) smoke.material.dispose();

    smoke = null;

  }

}, 3000);