// moduleUtils.js

export const loadScript = async (src, retries = 3, delay = 1000) => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = () => {
            if (retries > 0) {
                setTimeout(() => {
                    loadScript(src, retries - 1, delay).then(resolve).catch(reject);
                }, delay);
            } else {
                reject(new Error(`Failed to load script: ${src}`));
            }
        };
        document.body.appendChild(script);
    });
};