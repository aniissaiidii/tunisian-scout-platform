# Tunisian Scout ML Platform

End-to-end platform for the Tunisian Scout Association to forecast activity participation, segment scout units, and provide strategic dashboards.

## Project Overview

The association organizes hundreds of activities yearly across Tunisia, France, Spain, Italy, and America. This platform helps leaders estimate participant numbers, optimise budgets (21.14M TND), and monitor performance.

**Three integrated axes:**
- **Machine Learning** – Classification, regression, clustering, time series, LSTM, RL, NLP.
- **MLOps** – FastAPI, MLflow, Prometheus, Grafana, n8n, Docker.
- **Power BI** – Role-specific dashboards (Fawj Leader, Treasurer, Unit Leader, International).

## ML Models & Performance

| Module | Task | Best Model | Key Metric |
|--------|------|------------|-------------|
| Classification | Participation level (low/medium/high) | Random Forest | Macro F1 = 0.59 |
| Regression | Exact participant count | Random Forest Regressor | R² = 0.82, RMSE = 8.5 |
| Clustering | Unit segmentation | KMeans (k=2) | Silhouette = 0.69 |
| Time Series | Daily attendance forecast | SARIMA / LSTM | 98.9% accuracy |
| NLP | Text classification | TF‑IDF + Logistic Regression | – |
| Reinforcement Learning | Activity type per season | Q‑learning (ε‑greedy) | Cumulative reward |
| Deep Learning | Sequence forecasting | LSTM(50) + Dense(1) | RMSE |

## MLOps Stack

- **FastAPI** – Prediction API (`/predict`, `/retrain`, `/metrics`, `/health`)
- **MLflow** – Experiment tracking (12 runs, versioned models)
- **Prometheus** – Metrics scraping (9 alerts configured)
- **Grafana** – 11 real‑time monitoring panels
- **n8n** – Automated workflows (daily prediction, weekly retraining)
- **Docker Compose** – Orchestration of all services

## Power BI Command Center

Multi‑page report with role‑based views.

### Fawj Leader Dashboard
- Unit growth comparison (2023‑2025)
- Engagement ratio (15.26% – 17.68%)
- Event attendance by unit & activity type
- Spending efficiency per activity type

### Treasurer Dashboard
- Budget by category (Food 33%, Transport 25%, etc.)
- AI Key Influencers (March, May, April reduce participation)
- SDG alignment (Education, Peace & Justice, Reduced Inequalities)

### Unit Leader Dashboard
- Member segmentation (Flowers 86, Cubs 84, Girl Guides 74, Scouts 58, Mobile 32, Evidence 24)
- Total budget per unit (Mobile highest)
- Leader category distribution (gender, rank)

### International Dashboard
- Country ranking (Spain 2,039 activities, France 1,996, Tunisia 1,861)
- Global program distribution (Camping 29.33%, Activity 28.86%)
- SDG global impact & outreach ranking

## Tech Stack

- **Frontend**: Angular 17
- **Backend**: FastAPI (Python 3.11)
- **ML**: Scikit‑learn, ARIMA, LSTM, XGBoost
- **MLOps**: MLflow, Prometheus, Grafana, n8n
- **BI**: Power BI Desktop
- **Deployment**: Docker, Docker Compose

## Quick Start (Docker)

```bash
git clone https://github.com/your-org/tunisian-scout-ml-platform.git
cd tunisian-scout-ml-platform
docker-compose up -d

