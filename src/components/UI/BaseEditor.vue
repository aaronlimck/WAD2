<template>
  <div>
    <div v-if="editor">
      <button
        @click="editor.chain().focus().toggleBold().run()"
        :disabled="!editor.can().chain().focus().toggleBold().run()"
        :class="[
          { 'is-active': editor.isActive('bold') },
          'border border-zinc-300 hover:border-zinc-400 rounded-lg text-sm px-4 py-1 mx-1 mb-2',
        ]"
      >
        bold
      </button>
      <button
        @click="editor.chain().focus().toggleItalic().run()"
        :disabled="!editor.can().chain().focus().toggleItalic().run()"
        :class="[
          { 'is-active': editor.isActive('italic') },
          'border border-zinc-300 hover:border-zinc-400 rounded-lg text-sm px-4 py-1 mx-1 mb-2',
        ]"
      >
        italic
      </button>
      <button
        @click="editor.chain().focus().toggleStrike().run()"
        :disabled="!editor.can().chain().focus().toggleStrike().run()"
        :class="[
          { 'is-active': editor.isActive('strike') },
          'border border-zinc-300 hover:border-zinc-400 rounded-lg text-sm px-4 py-1 mx-1 mb-2',
        ]"
      >
        strike
      </button>
      <button
        @click="editor.chain().focus().toggleCode().run()"
        :disabled="!editor.can().chain().focus().toggleCode().run()"
        :class="[
          { 'is-active': editor.isActive('code') },
          'border border-zinc-300 hover:border-zinc-400 rounded-lg text-sm px-4 py-1 mx-1 mb-2',
        ]"
      >
        code
      </button>
      <button
        @click="editor.chain().focus().unsetAllMarks().run()"
        class="border border-zinc-300 hover:border-zinc-400 rounded-lg text-sm px-4 py-1 mx-1 mb-2"
      >
        clear marks
      </button>
      <button
        @click="editor.chain().focus().clearNodes().run()"
        class="border border-zinc-300 hover:border-zinc-400 rounded-lg text-sm px-4 py-1 mx-1 mb-2"
      >
        clear nodes
      </button>
      <button
        @click="editor.chain().focus().setParagraph().run()"
        :class="[
          { 'is-active': editor.isActive('paragraph') },
          'border border-zinc-300 hover:border-zinc-400 rounded-lg text-sm px-4 py-1 mx-1 mb-2',
        ]"
      >
        paragraph
      </button>
      <button
        @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
        :class="[
          { 'is-active': editor.isActive('heading', { level: 1 }) },
          'border border-zinc-300 hover:border-zinc-400 rounded-lg text-sm px-4 py-1 mx-1 mb-2',
        ]"
      >
        h1
      </button>
      <button
        @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
        :class="[
          { 'is-active': editor.isActive('heading', { level: 2 }) },
          'border border-zinc-300 hover:border-zinc-400 rounded-lg text-sm px-4 py-1 mx-1 mb-2',
        ]"
      >
        h2
      </button>
      <button
        @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
        :class="[
          { 'is-active': editor.isActive('heading', { level: 3 }) },
          'border border-zinc-300 hover:border-zinc-400 rounded-lg text-sm px-4 py-1 mx-1 mb-2',
        ]"
      >
        h3
      </button>
      <button
        @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
        :class="[
          { 'is-active': editor.isActive('heading', { level: 4 }) },
          'border border-zinc-300 hover:border-zinc-400 rounded-lg text-sm px-4 py-1 mx-1 mb-2',
        ]"
      >
        h4
      </button>
      <button
        @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
        :class="[
          { 'is-active': editor.isActive('heading', { level: 5 }) },
          'border border-zinc-300 hover:border-zinc-400 rounded-lg text-sm px-4 py-1 mx-1 mb-2',
        ]"
      >
        h5
      </button>
      <button
        @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
        :class="[
          { 'is-active': editor.isActive('heading', { level: 6 }) },
          'border border-zinc-300 hover:border-zinc-400 rounded-lg text-sm px-4 py-1 mx-1 mb-2',
        ]"
      >
        h6
      </button>
      <button
        @click="editor.chain().focus().toggleBulletList().run()"
        :class="[
          { 'is-active': editor.isActive('bulletList') },
          'border border-zinc-300 hover:border-zinc-400 rounded-lg text-sm px-4 py-1 mx-1 mb-2',
        ]"
      >
        bullet list
      </button>
      <button
        @click="editor.chain().focus().toggleOrderedList().run()"
        :class="[
          { 'is-active': editor.isActive('orderedList') },
          'border border-zinc-300 hover:border-zinc-400 rounded-lg text-sm px-4 py-1 mx-1 mb-2',
        ]"
      >
        ordered list
      </button>
      <button
        @click="editor.chain().focus().toggleCodeBlock().run()"
        :class="[
          { 'is-active': editor.isActive('codeBlock') },
          'border border-zinc-300 hover:border-zinc-400 rounded-lg text-sm px-4 py-1 mx-1 mb-2',
        ]"
      >
        code block
      </button>
      <button
        @click="editor.chain().focus().toggleBlockquote().run()"
        :class="[
          { 'is-active': editor.isActive('blockquote') },
          'border border-zinc-300 hover:border-zinc-400 rounded-lg text-sm px-4 py-1 mx-1 mb-2',
        ]"
      >
        blockquote
      </button>
      <button
        @click="editor.chain().focus().setHorizontalRule().run()"
        class="border border-zinc-300 hover:border-zinc-400 rounded-lg text-sm px-4 py-1 mx-1 mb-2"
      >
        horizontal rule
      </button>
      <button
        @click="editor.chain().focus().setHardBreak().run()"
        class="border border-zinc-300 hover:border-zinc-400 rounded-lg text-sm px-4 py-1 mx-1 mb-2"
      >
        hard break
      </button>
      <button
        @click="editor.chain().focus().undo().run()"
        :disabled="!editor.can().chain().focus().undo().run()"
        class="border border-zinc-300 hover:border-zinc-400 rounded-lg text-sm px-4 py-1 mx-1 mb-2"
      >
        undo
      </button>
      <button
        @click="editor.chain().focus().redo().run()"
        :disabled="!editor.can().chain().focus().redo().run()"
        class="border border-zinc-300 hover:border-zinc-400 rounded-lg text-sm px-4 py-1 mx-1 mb-2"
      >
        redo
      </button>
    </div>
    <editor-content :editor="editor" />
  </div>
</template>

<script>
import StarterKit from "@tiptap/starter-kit";
import { Editor, EditorContent } from "@tiptap/vue-3";

export default {
  components: {
    EditorContent,
  },

  data() {
    return {
      editor: null,
    };
  },

  mounted() {
    this.editor = new Editor({
      extensions: [StarterKit],
      content: `
        <h2>
          Hi there,
        </h2>
        <p>
          this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
        </p>
        <ul>
          <li>
            That’s a bullet list with one …
          </li>
          <li>
            … or two list items.
          </li>
        </ul>
        <p>
          Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
        </p>
        <pre><code class="language-css">body {
  display: none;
}</code></pre>
        <p>
          I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
        </p>
        <blockquote>
          Wow, that’s amazing. Good work, boy! 👏
          <br />
          — Mom
        </blockquote>
      `,
    });
  },

  beforeUnmount() {
    this.editor.destroy();
  },
};
</script>

<style scoped>
/* Basic editor styles */
.ProseMirror > * + * {
  margin-top: 0.75em;
}
.ProseMirror ul,
.ProseMirror ol {
  padding: 0 1rem;
}
.ProseMirror h1,
.ProseMirror h2,
.ProseMirror h3,
.ProseMirror h4,
.ProseMirror h5,
.ProseMirror h6 {
  line-height: 1.1;
}
.ProseMirror code {
  background-color: rgba(97, 97, 97, 0.1);
  color: #616161;
}
.ProseMirror pre {
  background: #0d0d0d;
  color: #fff;
  font-family: "JetBrainsMono", monospace;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
}
.ProseMirror pre code {
  color: inherit;
  padding: 0;
  background: none;
  font-size: 0.8rem;
}
.ProseMirror img {
  max-width: 100%;
  height: auto;
}
.ProseMirror blockquote {
  padding-left: 1rem;
  border-left: 2px solid rgba(13, 13, 13, 0.1);
}
.ProseMirror hr {
  border: none;
  border-top: 2px solid rgba(13, 13, 13, 0.1);
  margin: 2rem 0;
}
</style>
