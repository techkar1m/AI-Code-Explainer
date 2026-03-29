import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface ExplainHistory {
  language: string;
  code: string;
  explanation: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  code = '';
  explanation = '';
  isLoading = false;
  copied = false;
  selectedLanguage = 'javascript';
  history: ExplainHistory[] = [];
  showHistory = false;

  languages = [
    { value: 'javascript', label: '🟨 JavaScript' },
    { value: 'typescript', label: '🔷 TypeScript' },
    { value: 'python', label: '🐍 Python' },
    { value: 'java', label: '☕ Java' },
    { value: 'csharp', label: '🟣 C#' },
    { value: 'cpp', label: '⚙️ C++' },
    { value: 'html', label: '🌐 HTML' },
    { value: 'css', label: '🎨 CSS' },
    { value: 'sql', label: '🗄️ SQL' },
  ];

  private apiKey = 'grog-API-KEY'; // ← paste your gsk_ key here

  async explainCode() {
    if (!this.code.trim()) return;

    this.isLoading = true;
    this.explanation = '';

    const prompt = `You are an expert code explainer.
Explain the following ${this.selectedLanguage} code in a clear and beginner-friendly way.
Structure your response like this:

📌 OVERVIEW
(A short summary of what the code does)

🔍 LINE BY LINE EXPLANATION
(Explain each important part)

💡 KEY CONCEPTS USED
(List the main programming concepts used)

⚠️ POTENTIAL IMPROVEMENTS
(Suggest any improvements)

Here is the code:
${this.code}`;

    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: [
            {
              role: 'system',
              content: 'You are an expert code explainer. Always be clear, concise and beginner friendly.'
            },
            {
              role: 'user',
              content: prompt
            }
          ],
          max_tokens: 1024,
          temperature: 0.5
        })
      });

      const data = await response.json();
      this.explanation = data.choices[0].message.content;

      // Save to history
      this.history.unshift({
        language: this.selectedLanguage,
        code: this.code,
        explanation: this.explanation
      });

    } catch (error) {
      this.explanation = 'Something went wrong. Please try again.';
    }

    this.isLoading = false;
  }

  copyExplanation() {
    navigator.clipboard.writeText(this.explanation);
    this.copied = true;
    setTimeout(() => this.copied = false, 2000);
  }

  clearAll() {
    this.code = '';
    this.explanation = '';
  }

  loadHistory(item: ExplainHistory) {
    this.code = item.code;
    this.explanation = item.explanation;
    this.selectedLanguage = item.language;
    this.showHistory = false;
  }
}