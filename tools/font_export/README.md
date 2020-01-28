# Font exporter

This tool converts font files into the format used by txtjs.

## Notice

**DO NOT STEAL FONTS. DO NOT EXPORT FONTS WITHOUT A PROPER LICENSE.**

## Usage

1. Install python, fontforge, and install BeautifulSoup4

   ```sh
   pip install beautifulsoup4
   ```

2. Create the following directories:

   ```sh
   mkdir font source_fonts svg svgff web_fonts
   ```

3. Place TTF or OTF fonts in "source_fonts" directory

4. Run:

   ```sh
   fontforge -script convert.pe source_fonts/*.ttf
   fontforge -script convert.pe source_fonts/*.otf
   ```

5. COPY .SVG Files from source_fonts to "svgff" directory

6. Run:

   ```sh
   python main.py
   ```

7. exported fonts are in the 'fonts' directory
